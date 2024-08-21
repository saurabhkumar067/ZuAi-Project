import React, { useEffect, useRef, useState } from "react";
import { MdOutlineUploadFile } from "react-icons/md";
import { MdStars } from "react-icons/md";
import MyWork from "./MyWork";
import MainPageRight from "./MainPageRight";

function MainPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [pdfNames, setPdfNames] = useState([]);
  const fileInputRef = useRef(null);
  const [courseworkType, setCourseworkType] = useState("");
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    const storedPdfNames = JSON.parse(localStorage.getItem("pdfNames")) || [];
    setPdfNames(storedPdfNames);
  }, []);

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const files = Array.from(event.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const pdfFiles = files.filter((file) => file.type === "application/pdf");
    if (pdfFiles.length > 0) {
      const newPdfNames = pdfFiles.map((file) => file.name);
      const updatedPdfNames = [...pdfNames, ...newPdfNames];
      setPdfNames(updatedPdfNames);
      localStorage.setItem("pdfNames", JSON.stringify(updatedPdfNames));
    } else {
      alert("Please select only PDF files.");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    handleFiles(files);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("essayFormData"));
    if (storedData) {
      setCourseworkType(storedData.courseworkType || "");
      setSubject(storedData.subject || "");
      setTitle(storedData.title || "");
    }
  }, []);

  const handleCourseworkChange = (event) => {
    setCourseworkType(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFileChanges = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!courseworkType || !subject || !title) {
      console.log(courseworkType, subject, title);
      return;
      alert("Please complete all fields and select a file.");
    } else {
    }

    const formData = {
      courseworkType,
      subject,
      title,
      fileName: pdfNames.name,

      fileType: pdfNames.type,
    };

    localStorage.setItem("essayFormData", JSON.stringify(formData));
    alert("Form data has been saved locally.");
  };

  return (
    <div className="w-full h-full height-M">
      <div className="w-[75%] width-Full text-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="flex gap-5 justify-content align-items">
          <div className="left w-[65%] width-95 media-width">
            <div className="text-[1.5rem] text-[#1E2026] font-bold mb-8 font-Size margin-M">
              Hey IB Folks ! Unsure about the quality of your answers?{" "}
              <span className="text-[#6947BF]">We get you.</span>
            </div>
            <div className="border-[1px] p-6 rounded-3xl bg-[#F5F7FA]">
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                style={{
                  border: isDragging && "2px dashed #00f",
                }}
                className="text-lg mt-3 font-semibold"
              >
                <div className="border-[3px] border-dashed flex flex-col items-center py-8 rounded-2xl bg-[#FCFBFD] text-[#98A1BB]">
                  <MdOutlineUploadFile style={{ fontSize: "2.5rem" }} />

                  {pdfNames.length > 0 ? (
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      {pdfNames.map((name, index) => (
                        <li key={index}>{name}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>Drag and drop a PDF</p>
                  )}
                  <span className="text-sm mb-5">*Limit 25 MB per file</span>

                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    accept="application/pdf"
                    multiple
                    onChange={handleFileChange}
                  />
                  <button
                    onClick={handleButtonClick}
                    className="outline-none text-lg rounded-full px-4 py-1 border-[1px] text-[#6A49C0] border-[#D7CEEE] font-semibold"
                  >
                    Upload your file
                  </button>
                </div>
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className="my-5 mb-10">
                  <div className="mb-5">
                    <span className="mb-2 block text-[#9197A9]">
                      Select your course & subjects*
                    </span>
                    <div className="flex gap-5 flex-col Align-Items">
                      <select
                        id="courseworkType"
                        value={courseworkType}
                        onChange={handleCourseworkChange}
                        className="outline-none text-md rounded-full px-3 py-1 border-[1px] text-[#5D6372] flex items-center"
                      >
                        <option value="">Coursework Type</option>
                        <option className="text-sm p-0" value="essay">
                          Essay
                        </option>
                        <option className="text-sm p-0" value="report">
                          Report
                        </option>
                        <option className="text-sm p-0" value="project">
                          Project
                        </option>
                      </select>
                      <select
                        id="subject"
                        value={subject}
                        onChange={handleSubjectChange}
                        className="outline-none text-md rounded-full px-3 py-1 border-[1px] text-[#5D6372] flex items-center"
                      >
                        <option value="">Subject</option>
                        <option className="text-sm p-0" value="math">
                          Mathematics
                        </option>
                        <option className="text-sm p-0" value="science">
                          Science
                        </option>
                        <option className="text-sm p-0" value="history">
                          History
                        </option>
                        <option className="text-sm p-0" value="literature">
                          Literature
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="title" className="mb-1 text-[#9197A9]">
                      Enter your essay title*(Required)
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={handleTitleChange}
                      placeholder="how nation works....."
                      className="w-[75%] foucs:outline-[1px] text-black outline-none px-2 py-[0.4rem] rounded-full border-[1px]border-[#FA9973]"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="media-margin width-Full Justify-Content text-white flex gap-1 items-center outline-none text-lg rounded-full px-3 py-1 border-[1px] bg-[#ADB8C9] text-blue-900 text-[#F8F9FB]"
                >
                  <span>
                    <MdStars />
                  </span>
                  Evaluate your Score
                </button>
              </form>
            </div>
          </div>
          <div className="right w-[33%] display">
            <MainPageRight />
          </div>
        </div>
        <div className="my-10 Margin-Left Margin-Right">
          <h2 className="text-2xl mb-3 text-[#5E6473] font-semibold font-Size">
            My coursework
          </h2>
          <div className="flex gap-4 flex-direction-col">
            <MyWork />
            <MyWork />
          </div>
          <button className="Font-Size-M w-full text-center mt-6 text-xl text-[#A2AAC2]">
            View all
          </button>
        </div>
        <div className="my-10 Margin-Left Margin-Right">
          <h2 className="text-2xl mb-3 text-[#5E6473] font-semibold">
            Explore coursework
          </h2>
          <ul className="flex flex-wrap gap-M gap-5 ml-5 mb-5">
            <li className="text-[#6C4BC0] font-semibold bg-[#F6F8FB] px-2 rounded-full py-0.5">
              All
            </li>
            <li className="text-[#9BA4BD]">IA Example</li>
            <li className="text-[#9BA4BD]">EE Example</li>
            <li className="text-[#9BA4BD]">IO Example</li>
            <li className="text-[#9BA4BD]">Tok Example</li>
          </ul>
          <div className="flex flex-direction-col gap-4">
            <MyWork />
            <MyWork />
          </div>
          <div className="flex flex-direction-col gap-4 mt-5">
            <MyWork />
            <MyWork />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

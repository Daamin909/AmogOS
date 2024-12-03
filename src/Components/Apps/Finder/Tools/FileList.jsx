import React from "react";
import { FileImage, FileText, FileAudio } from "lucide-react";

const FileList = ({ files, searchTerm, selectedFile, setSelectedFile }) => {
  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getFileIcon = (type) => {
    switch (type) {
      case "image":
        return <FileImage size={24} />;
      case "audio":
        return <FileAudio size={24} />;
      default:
        return <FileText size={24} />;
    }
  };

  const handleFileClick = (file) => {
    if (selectedFile && selectedFile.name === file.name) {
      setSelectedFile(null);
    } else {
      setSelectedFile(file);
    }
  };

  return (
    <div className={`file-list file-list--grid`}>
      {filteredFiles.map((file, index) => (
        <div
          key={index}
          className={`file-item ${
            selectedFile && selectedFile.name === file.name
              ? "file-item--selected"
              : ""
          }`}
          onClick={() => handleFileClick(file)}
        >
          <div className="file-item__info">
            {getFileIcon(file.type)}
            <span className="file-item__name">{file.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileList;


import React from "react";
import { FileImage, FileText, FileAudio } from "lucide-react";

interface File {
  name: string;
  type: string;
  image?: string;
  content?: string;
  audio?: string;
}

interface FileListProps {
  files: File[];
  searchTerm: string;
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
}

const FileList: React.FC<FileListProps> = ({
  files,
  searchTerm,
  selectedFile,
  setSelectedFile,
}) => {
  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <FileImage size={24} />;
      case "audio":
        return <FileAudio size={24} />;
      default:
        return <FileText size={24} />;
    }
  };

  const handleFileClick = (file: File) => {
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

// pages/index.js

import { useState } from 'react';
import axios from 'axios';

const PdfToExcelConverter2 = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('pdfFile', file);

    try {
        debugger;
      const response = await axios.post('http://localhost:5215/api/PdfToExcel/ConvertPdfToExcel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="pdfFile" className="block mb-4">
          Choose a PDF file:
          <input
            type="file"
            id="pdfFile"
            name="pdfFile"
            accept="application/pdf"
            onChange={handleFileChange}
            className="mt-2"
          />
        </label>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Convert to Excel
        </button>
      </form>
    </div>
  );
};

export default PdfToExcelConverter2;

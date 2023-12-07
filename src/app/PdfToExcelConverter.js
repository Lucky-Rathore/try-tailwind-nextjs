import { useState } from 'react';
import axios from 'axios';

const PdfToExcelConverter = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleConvert = async () => {
        try {
            debugger;
            const formData = new FormData();
            formData.append('pdfFile', file);

            const response = await axios.post('https://localhost:7241/api/PdfToExcel/ConvertPdfToExcel', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Handle the response, e.g., download the Excel file
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(new Blob([response.data]));
            downloadLink.setAttribute('download', 'output.xlsx');
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } catch (error) {
            console.error('Error converting PDF to Excel:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleConvert} disabled={!file}>
                Convert to Excel
            </button>
        </div>
    );
};

export default PdfToExcelConverter;

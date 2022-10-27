import React from 'react';
import jsPDF from 'jspdf';
import { FaFilePdf } from 'react-icons/fa';

const PdfDoc = ({ courseDetails }) => {
    console.log(courseDetails)
    const { courseTitle, instructor, price, duration } = courseDetails
    const pdfGenerate = () => {
        const doc = new jsPDF('portrait', 'px', 'a4', 'false');
        doc.text(150, 30, 'COURSE DETAILS')
        doc.text(40, 50, "Course Title:")
        doc.text(150, 50, `${courseTitle}`)
        doc.text(40, 70, "Instructor:")
        doc.text(100, 70, `${instructor}`)
        doc.text(40, 90, "Fee:")
        doc.text(100, 90, `${price}`)
        doc.text(40, 110, "Course duration:")
        doc.text(150, 110, `${duration} weeks`)


        doc.save('courseInfo.pdf')
    }
    return (
        <div>
            <button onClick={pdfGenerate} className="btn btn-outline btn-info" ><FaFilePdf className='text-xl mr-3' /> Download PDF</button>
        </div>
    );
};

export default PdfDoc;
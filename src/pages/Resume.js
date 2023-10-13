import resumeImg from '../assets/images/resume.jpg';
import resumePDF from '../assets/documents/resume.pdf';

function Resume(){

    const handleDownload = () => { 

        const pdfUrl = resumePDF;
        const link = document.createElement('a');
        
        link.href = pdfUrl;
        link.download = 'jordan-pettyjohn-resume.pdf';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }

    return (
        <div className="resume-main">
            <div>Download Pdf</div>
            <img className="resume-img" src={resumeImg} alt="This is me"></img>
            <button className="resume-button" onClick={handleDownload}>Download Pdf</button>
        </div>
    );
}

export default Resume;
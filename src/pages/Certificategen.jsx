import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DonationCertificate = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    date: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const certificateRef = useRef();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.amount && formData.date) {
      setSubmitted(true);
    }
  };

  const downloadCertificate = async () => {
    const element = certificateRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10, 190, 130);
    pdf.save(`${formData.name}-donation-certificate.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-center">Donation Details</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Donation Amount (₹)"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Generate Certificate
          </button>
        </form>
      ) : (
        <>
          <div ref={certificateRef} className="bg-white p-8 mt-6 rounded shadow-md text-center w-full max-w-2xl border border-gray-300">
            <h1 className=" font-poppins text-3xl sm:text-xl font-semibold md:font-bold text-green-700 mb-4">Engross Foundation</h1>
            <p className=" font-poppins text-lg mb-4">This certificate is proudly presented to</p>
            <h2 className="text-2xl font-semibold">{formData.name}</h2>
            <p className="my-4">for their generous donation of <strong>₹{formData.amount}</strong></p>
            <p>Date: {formData.date}</p>
            <p className="mt-6 italic text-sm text-gray-600">Thank you for making a difference!</p>
            
          </div>

          <button
            onClick={downloadCertificate}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Download Certificate
          </button>
        </>
      )}
    </div>
  );
};

export default DonationCertificate;

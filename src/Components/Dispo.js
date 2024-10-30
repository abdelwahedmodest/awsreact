import React, { useState } from 'react';
import axios from 'axios';
import './Dispo.css';  // Import du fichier CSS pour le style

const CandidateForm = () => {
    const [formData, setFormData] = useState({
        actively_looking: false,
        job_type: 'full_time',
        other_job: '',
        willing_to_learn: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/submit/', formData)
            .then(response => {
                alert('Form submitted successfully');
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="candidate-form">
            <div>
                <label>Êtes-vous activement à la recherche d'un emploi ?</label>
                <input
                    type="checkbox"
                    name="actively_looking"
                    checked={formData.actively_looking}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Quels types d'emplois recherchez-vous actuellement ?</label>
                <select name="job_type" value={formData.job_type} onChange={handleChange}>
                    <option value="full_time">Temps plein</option>
                    <option value="part_time">Temps partiel</option>
                    <option value="freelance">Freelance</option>
                    <option value="other">Autre</option>
                </select>
                {formData.job_type === 'other' && (
                    <input
                        type="text"
                        name="other_job"
                        value={formData.other_job}
                        onChange={handleChange}
                        placeholder="Précisez..."
                    />
                )}
            </div>

            <div>
                <label>Êtes-vous prêt(e) à vous former pour une nouvelle compétence ou un nouveau secteur ?</label>
                <input
                    type="checkbox"
                    name="willing_to_learn"
                    checked={formData.willing_to_learn}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Envoyer</button>
        </form>
    );
};

export default CandidateForm;


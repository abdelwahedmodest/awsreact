import React from 'react';
import './Questionnaire.css';

const Questionnaire = () => {
    return (
        <div className="questionnaire-container">
            <h1>Situation professionnelle actuelle</h1>
            <form>
                <label>Êtes-vous actuellement employé(e) ?</label>
                <input type="radio" name="employed" value="oui" /> Oui
                <input type="radio" name="employed" value="non" /> Non
                <label>Si oui, quel est votre poste actuel ?</label>
                <input type="text" name="poste" />
                <label>Si non, depuis combien de temps êtes-vous sans emploi ?</label>
                <select name="duree">
                    <option value="moins de 3 mois">Moins de 3 mois</option>
                    <option value="3 à 6 mois">3 à 6 mois</option>
                    <option value="plus de 6 mois">Plus de 6 mois</option>
                </select>
                <label>Avez-vous déjà reçu des indemnités chômage ?</label>
                <input type="radio" name="indemnites" value="oui" /> Oui
                <input type="radio" name="indemnites" value="non" /> Non
                <button type="submit">Soumettre</button>
            </form>
        </div>
    );
};

export default Questionnaire;

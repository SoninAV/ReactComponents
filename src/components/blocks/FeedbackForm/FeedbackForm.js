import React, { useState } from 'react';
import logoEdSpase from '../../../img/logo_EdSpase.png';
import './FeedbackForm.css';

const FeedbackForm =  ({ isOpen, onClose })  => {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        position: '',
        email: '',
        phone: '',
        consent: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        isOpen &&
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                &times;
                </span>
                <img src={logoEdSpase} alt="Logo" className="logo" />
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Имя Фамилия"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="organization"
                    placeholder="Название организации"
                    value={formData.organization}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="position"
                    placeholder="Должность"
                    value={formData.position}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <div>
                    <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    />
                    <label>
                    Я согласен на обработку моих<br/>
                    <span>персональных данных</span>
                    </label>
                </div>
                <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
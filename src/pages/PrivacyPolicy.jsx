import React from 'react';

const policies = [
    "We do not share your personal information with third parties.",
    "Your data is stored securely and encrypted.",
    "You can request to delete your data at any time.",
    "We use cookies to improve your experience on our site.",
    "Your data is only used for providing and improving our services."
];

function PrivacyPolicy() {
    return (
        <div className="container mt-4">
            <h2>Privacy Policy</h2>
            <p>We take your privacy seriously. Read about how we handle your data...</p>
            <ul>
                {policies.map((policy, index) => (
                    <li key={index}>{policy}</li>
                ))}
            </ul>
        </div>
    );
}

export default PrivacyPolicy;

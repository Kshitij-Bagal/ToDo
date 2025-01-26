import React from "react";

const termsAndConditions = [
    "Acceptance of Terms: By using the KB-DEV To-Do List app, you agree to be bound by these terms and conditions.",
    "User Responsibilities: You are responsible for maintaining the confidentiality of your account and password.",
    "Prohibited Activities: You agree not to use the app for any unlawful or prohibited activities.",
    "Termination: We reserve the right to terminate or suspend your access to the app at any time, without notice, for conduct that we believe violates these terms.",
    "Limitation of Liability: KB-DEV is not liable for any damages arising from the use of this app.",
    "Changes to Terms: We may update these terms from time to time. Your continued use of the app constitutes acceptance of those changes."
    ,"Acceptance of Terms: By using the KB-DEV To-Do List app, you agree to be bound by these terms and conditions.",
    "User Responsibilities: You are responsible for maintaining the confidentiality of your account and password.",
    "Prohibited Activities: You agree not to use the app for any unlawful or prohibited activities.",
    "Termination: We reserve the right to terminate or suspend your access to the app at any time, without notice, for conduct that we believe violates these terms.",
    "Limitation of Liability: KB-DEV is not liable for any damages arising from the use of this app.",
    "Changes to Terms: We may update these terms from time to time. Your continued use of the app constitutes acceptance of those changes."
];

function Terms() {
    return (
        <div className="container mt-4">
            <h2>Terms of Service</h2>
            <p>Please read the following terms and conditions carefully:</p>
            <ul>
                {termsAndConditions.map((term, index) => (
                    <li key={index}>{term}</li>
                ))}
            </ul>
        </div>
    );
}

export default Terms;


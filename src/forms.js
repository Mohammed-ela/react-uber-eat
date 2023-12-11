import React, { useState, useRef, useEffect, useContext, createContext } from "react";

// Création d'un contexte pour stocker les messages d'erreur
export const ErrorMessageContext = createContext();

// Un composant de champ de saisie
export const InputField = ({ label, value, onChange, refProp }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} ref={refProp} />
    </div>
  );
};

// Un composant du formulaire principal
export const MyForm = () => {
  // Utilisation de useState pour stocker les valeurs des champs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Utilisation de useRef pour les champs de saisie
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  // Utilisation de useContext pour accéder au contexte des messages d'erreur
  const errorMessageContext = useContext(ErrorMessageContext);

  // Utilisation de useEffect pour afficher les messages d'erreur en cas de caractères spéciaux
  useEffect(() => {
    const firstNameHasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(firstName);
    const lastNameHasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(lastName);

    if (firstNameHasSpecialChars || lastNameHasSpecialChars) {
      errorMessageContext.setError("Les caractères spéciaux ne sont pas autorisés.");
    } else {
      errorMessageContext.setError("");
    }
  }, [firstName, lastName, errorMessageContext]);

  // Fonction pour gérer la mise à jour du formulaire
  const handleUpdate = () => {
    // Mise à jour du contexte avec les noms d'input
    errorMessageContext.setInputNames(`${firstName} ${lastName}`);
  };

  return (
    <div>
      {/* Affichage des messages d'erreur */}
      {errorMessageContext.error && <p style={{ color: "red" }}>{errorMessageContext.error}</p>}

      {/* Affichage des noms d'input */}
      {errorMessageContext.inputNames && <p>Noms d'input : {errorMessageContext.inputNames}</p>}

      {/* Champs de saisie */}
      <InputField label="Prénom:" value={firstName} onChange={(e) => setFirstName(e.target.value)} refProp={firstNameRef} />
      <InputField label="Nom de famille:" value={lastName} onChange={(e) => setLastName(e.target.value)} refProp={lastNameRef} />

      {/* Bouton "mettre à jour" */}
      <button class="btn-maj" onClick={handleUpdate}>Mettre à jour</button>
    </div>
  );
};

// Un composant qui utilise le contexte pour stocker les messages d'erreur
export const ErrorMessageProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [inputNames, setInputNames] = useState("");

  const contextValue = {
    error,
    setError,
    inputNames,
    setInputNames,
  };

  return <ErrorMessageContext.Provider value={contextValue}>{children}</ErrorMessageContext.Provider>;
};

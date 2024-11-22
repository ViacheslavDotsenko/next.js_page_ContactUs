"use client";
import { useState, FormEvent } from "react";

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Перевірка валідації (наприклад, перевірка наявності "@" у емейлі)
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      console.log("Submitted email:", email);

      // Очистка поля вводу після успішного надсилання
      setEmail("");
      setError(null); // Скидаємо помилку після успішного надсилання
    } catch (err) {
      setError("Failed to send email. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center content-center mb-[1.5rem]">
      <label htmlFor="email" className="text-lg font-semibold">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(null); // Скидаємо помилку при зміні значення
          }}
          required
          placeholder="Your email address"
          className={`p-1.5 border ${error ? 'border-red-500' : 'border-[#2b2a2a]'} text-[#616060] text-[11px] bg-[#2b2a2a] rounded-md w-full max-w-sm`}
        />
      </label>
      <button
        type="submit"
        className="bg-black text-white font-semibold ml-[5px] px-4 py-2.5 rounded-md hover:bg-[#4c4c4c] transition duration-300"
      >
        Subscribe
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </form>
  );
};

export default EmailForm;

export default function Input({ name, id, label, type = "text", required }: any) {
  if (type == "textarea") {
    return (
      <div className="input">
        <label className="input__label text" htmlFor={id}>
          {label}
        </label>
        <textarea
          required={required}
          className="input__input"
          name={name}
          id={id}
          rows={2}
        ></textarea>
      </div>
    );
  } else {
    return (
      <div className="input">
        <label className="input__label text" htmlFor={id}>
          {label}
        </label>
        <input
          required={required}
          className="input__input"
          id={id}
          name={name}
          type={type}
        />
      </div>
    );
  }
}

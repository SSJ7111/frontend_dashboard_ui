import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export const SubmitButton = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

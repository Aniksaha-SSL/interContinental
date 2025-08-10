import "./loading.css";
export default function Loading() {
  return (
    <div className="page-skeleton">
      <div className="header-skeleton">
        <div className="topbar-placeholder"></div>
        <div className="nav-placeholder">
          <div className="logo-placeholder"></div>
          <div className="menu-placeholder"></div>
          <div className="button-placeholder small"></div>
        </div>
      </div>
      <div className="online-payment-placeholder"></div>

      <div className="title-placeholder"></div>

      <div className="reservation-section">
        <div className="image-placeholder"></div>
        <div className="form-placeholder">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="input-placeholder" key={i}></div>
          ))}
          <div className="checkbox-placeholder"></div>
          <div className="button-placeholder large"></div>
        </div>
      </div>

      <div className="image-placeholder-logo"></div>

      <div className="d-flex align-items-center justify-content-center">
        <div className="media-link"></div>
        <div className="media-link"></div>
        <div className="media-link"></div>
        <div className="media-link"></div>
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <div className="media-link"></div>
        <div className="media-link"></div>
      </div>

      <div className="image-placeholder-footer"></div>
    </div>
  );
}

import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Herzlichen Willkommen im Online Shop von Mondwolke! <br />
              Durch die Umstände der Covid-19 Krise, sind wir auf die gloreiche
              Idee gekommen unseren eigenen Webshop zu basteln und im Zuge
              dessen freuen wir uns sehr Euch unsere Mondwolke Website
              vorstellen zu können
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-blue">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

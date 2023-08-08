import React from "react";
import "../src/index.css";
import cvJohann from "../public/cv/CV-JohannJerman.pdf"
import imageJohann from "../public/images/eljohan.jpg"
import imageMatias from "../public/images/IMG_20230707_142331_494.jpg"
export function CardIndex() {
  return (
    <>
      {/* <h1 className=" text-center text-2xl p-2 m-2">Desarrollado por:</h1> */}
      <div className="container my-18 my mx-auto px-4 md:px-12">
        <div className="flex flex-wrap place-content-around -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src={imageJohann}
              />
              <div className="mt-2  text-center">
                <h3 className="mb-1 text-3xl font-bold leading-normal text-gray-700">
                  Johann Jerman
                </h3>
                <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                  <div className="text-sm font-bold tracking-wide text-gray-600 dark:text-gray-700 font-mono ">
                    Desarrollador Full Stack
                  </div>
                </div>
                <div className="w-full text-center">
                  <div className="flex justify-center pt-8 pb-0 lg:pt-4">
                    <div className="flex space-x-2">
                      <a
                        className="p-1 -m-1 text-gray-400 hover:text-black focus:outline-none focus-visible:ring-2 ring-primary fa-brands fa-github text-2xl"
                        href="https://github.com/johann-jerman"
                        rel="noopener"
                        aria-label="Johann Jerman on Github"
                        target="_blank"
                      ></a>

                      <a
                        className="p-1 -m-1 text-gray-400 hover:text-a-c focus:outline-none focus-visible:ring-2 ring-primary fa-brands fa-linkedin-in text-2xl"
                        href="https://www.linkedin.com/in/johannjerman/"
                        rel="noopener"
                        aria-label="Johann Jerman on Linkedin"
                        target="_blank"
                      ></a>

                      <a
                        className="p-1 -m-1 text-gray-400 hover:text-red-600 focus:outline-none focus-visible:ring-2 ring-primary fa-solid fa-envelope text-2xl"
                        href="mailto:johannjerman014@gmail.com"
                        rel="noopener"
                        aria-label="Ariel Cerda on Instagram"
                        target="_blank"
                      ></a>

                      <a
                        className="p-1 -m-1 text-gray-400 hover:text-cv focus:outline-none focus-visible:ring-2 ring-primary fa-solid fa-file-arrow-down text-2xl"
                        href={cvJohann}
                        rel="noopener"
                        aria-label="CV"
                        target="_blank"
                        download={cvJohann}
                      ></a>

                      <a
                        className="p-1 -m-1 text-gray-400 hover:text-a-o focus:outline-none focus-visible:ring-2 ring-primary fa-solid fa-folder text-2xl"
                        href="https://liza-tdjy.onrender.com/"
                        rel="noopener"
                        aria-label="Portfolio Digital House"
                        target="_blank"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-6">
                    <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                      Actualmente incursionando en el hermoso mundo IT.
                      Trabajando y aprendiendo arduamente para poder cumplir,
                      hoy, mi objetivo principal que es ser desarrollador web.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src={imageMatias}
              />

              <div className="mt-2  text-center">
                <h3 className="mb-1 text-3xl font-bold leading-normal text-gray-700">
                  Matias Chaves
                </h3>
                <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                  <div className="text-sm font-bold tracking-wide text-gray-600 dark:text-gray-700 font-mono ">
                    Desarrollador Full Stack
                  </div>
                </div>
                <div className="w-full text-center">
                  <div className="flex justify-center pt-8 pb-0 lg:pt-4">
                    <div className="flex space-x-2">
                      <a
                        className="p-1 -m-1 text-gray-400 hover:text-black focus:outline-none focus-visible:ring-2 ring-primary fa-brands fa-github text-2xl"
                        href="https://github.com/matiaschaves01"
                        rel="noopener"
                        aria-label="Matias Chaves on Github"
                        target="_blank"
                      ></a>

                      <a
                        className="p-1 -m-1 text-gray-400 hover:text-a-c focus:outline-none focus-visible:ring-2 ring-primary fa-brands fa-linkedin-in text-2xl"
                        href="https://www.linkedin.com/in/matiaschaves/"
                        rel="noopener"
                        aria-label="Matias Chaves on Linkedin"
                        target="_blank"
                      ></a>

                      <a
                        className="p-1 -m-1 text-gray-400 hover:text-red-600 focus:outline-none focus-visible:ring-2 ring-primary fa-solid fa-envelope text-2xl"
                        href="mailto:matiaschaves01@gmail.com"
                        rel="noopener"
                        aria-label="Ariel Cerda on Instagram"
                        target="_blank"
                      ></a>

                      <a
                        className="p-1 -m-1 text-gray-400 hover:text-cv focus:outline-none focus-visible:ring-2 ring-primary fa-solid fa-file-arrow-down text-2xl"
                        href=""
                        rel="noopener"
                        aria-label="Ariel Cerda on Youtube"
                        target="_blank"
                      ></a>

                      <a
                        className="p-1 -m-1 text-gray-400 hover:text-a-o focus:outline-none focus-visible:ring-2 ring-primary fa-solid fa-folder text-2xl"
                        href=""
                        rel="noopener"
                        aria-label="Ariel Cerda on Youtube"
                        target="_blank"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-6">
                    <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                      Aquí un entusiasta Desarrollador Web con ganas de afrontar
                      nuevos desafíos, al que le gustaría formar parte de un
                      equipo. Estoy entusiasmado por comenzar mi carrera
                      profesional y contribuir con mi granito de arena.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

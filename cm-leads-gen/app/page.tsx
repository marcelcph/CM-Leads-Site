export default function Home() {
  return (
        <html data-theme="dark">
            <div className="overflow-hidden">
              <div>
                <h1 className="text-4xl font-bold tracking-tight leading-none md:text-5xl lg:text-6xl text-center mt-5">
                  Vind med
                </h1>
                <img
                  src="https://www.byggematerialer.dk/andel-energi/firma-files/Andel-Energi-Logo-stor.png"
                  className="-mt-8 mx-auto"
                />
              </div>
              <div className="w-full m-auto pr-5 pl-5 rounded-md shadow-md lg:max-w-6xl md:max-w-5xl">
                <div className="hero bg-base-200">
                  <div className="hero-content flex-col lg:flex-row">
                    <img
                      src="https://static.wixstatic.com/media/f758ab_8238ccd245614fb4a4f008c772f43598~mv2.png/v1/fill/w_560,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SuperGavekortet_DK_Physical_Christmas_Front_Flat.png"
                      className="max-w-full rounded-lg shadow-2xl lg:order-last lg:max-w-full lg:w-1/2 object-cover object-center"
                      alt="MacBook"
                    />
                    <div className="lg:w-1/2">
                      <h1 className="text-4xl font-bold">
                        Vind et gavekort på 2.000 kr!
                      </h1>
                      <p className="pt-6 font-bold">
                        Vær med i lodtrækningen om en fantastisk chance for at vinde
                        et Super-Gavekort på 2.000 kr, der åbner dørene til en
                        verden af muligheder. Med dette gavekort kan du forkæle dig
                        selv og dine nærmeste med uforglemmelige oplevelser og
                        shopping i en bred vifte af butikker og fornøjelser!
                      </p>
                      <p className="py-6 text-sm">
                        Deltag i konkurrencen om et Super-Gavekort på 2.000 kr og
                        bliv kontaktet via telefonopkald, e‑mail og sms/mms med gode
                        tilbud på dine energiløsninger. Der trækkes lod om 1
                        gavekort blandt alle deltagende. Du skal være over 18 år for
                        at deltage i konkurrencen.
                      </p>
                    </div>
                  </div>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="label">
                      <span className="text-base label-text">Navn</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Navn"
                      className="w-full input input-bordered input-primary"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="text-base label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="E-mail adresse"
                      className="w-full input input-bordered input-primary"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="text-base label-text">Mobil</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Telefonnummer"
                      pattern="[0-9]+"
                      className="w-full input input-bordered input-primary"
                    />
                  </div>
                  <div>
                    <label class="label cursor-pointer">
                      <input type="checkbox" class="checkbox" />
    
                      <span class="label-text pl-8">
                        Jeg giver samtykke til, at Andel Energi må kontakte mig via
                        telefonopkald, e-mail og sms/mms med markedsføring om Andel
                        Energi og deres produktsortiment. Samtykket må også bruges
                        til at spørge mig, om jeg ønsker at udvide mit samtykke ift.
                        markedsførings- og/eller databeskyttelsesreglerne. Samtykket
                        kan altid tilbagekaldes, se hvordan{" "}
                        <span className="underline">her.</span> Du kan læse i vores
                        persondatapolitik, hvordan vi behandler oplysninger om dig.
                      </span>
                    </label>
                    <button class="btn btn-block btn-primary">
                      DELTAG I KONKURRENCEN
                    </button>
                    <p className="text-center mt-6">
                      Konkurrencen løber fra den 16. Jan 2023 til og med den 14.
                      Februar 2023.
                    </p>
                  </div>
                  <div class="form-control"></div>
                </form>
              </div>
            </div>
        </html>
      );
    }
    
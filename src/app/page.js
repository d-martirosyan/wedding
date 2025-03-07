'use client';
import Image from "next/image";
import Script from 'next/script';

export default function Home() {
  return (
    <main className="back-black">
        <section id="top-section" className="relative">
            <section className="flex flex-column align-center relative">
                <section className="audio-secion flex flex-column align-center justify-center">
                    <div id="audio-paused">
                    </div>
                    <div id="audio-played">
                    </div>
                    <audio id="my-audio">
                        <source src="/assets/music/music.mp3" type="audio/mp3" />
                    </audio>
                </section>
                <h1 className="text-center">ՀԱՐՍԱՆՅԱՑ ՀՐԱՎԵՐ</h1>
    
                <section id="top-date-section" className="flex justify-center animation-div">
                    <div className="date flex flex-column">
                        <span>20</span>
                        <span>04</span>
                        <span>25</span>
                    </div>
                    <div className="names relative">
                        <span>
                        <Image
                          src="/assets/images/symbol.png"
                          alt="arrow"
                          width={500}
                          height={500}
                        />  
                        </span>
                        <div className="flex flex-column">
                            <span>Erik</span>
                            <span>Lana</span>
                        </div>
                    </div>
                </section>
                <div className="arrow-div flex align-center justify-center">
                    <Image
                      src="/assets/images/arrow.png"
                      alt="arrow"
                      width={500}
                      height={500}
                    />                
                </div>
            </section>
            <section className="flex flex-column align-center relative">
                <h2>LOVE STORY</h2>
                <span className="separator-div"></span>
                <div className="flex animation-div">
                    <div>
                      <Image
                        src="/assets/images/errord.PNG"
                        alt="Description of image"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div>
                      <Image
                        src="/assets/images/fourth.png"
                        alt="Description of image"
                        width={500}
                        height={500}
                      />
                    </div>
                </div>
            </section>
            <section className="flex flex-column align-center relative text-center">
                <div>
                    <h3>Ընկերներ և բարեկամներ,</h3>
                    <p>Սիրով հրավիրում ենք Ձեզ՝ կիսելու մեզ հետ մեր կյանքի</p>
                    <p>կարևոր և հիշարժան օրը։</p>
                </div>
            </section>
            <div className="blur-div relative background"></div>
        </section>
        <section id="second-section" className="background relative flex flex-column align-center">
            <h3 className="text-center">Սպասում ենք Ձեզ մեր հարսանիքին</h3>
            <div className="date flex flex-column align-center">
                <span>20</span>
                <span>04</span>
                <span>25</span>
            </div>
            <span className="separator-div back-black"></span>
            <div className="date-timer-div">
                <h5 className="text-center">ՄՆԱՑ</h5>
                <div className="flex align-center">
                    <div className="day text-center flex flex-column">
                        <span></span>
                        <span>Օր</span>
                    </div>
                    <div className="hour text-center flex flex-column">
                        <span></span>
                        <span>Ժամ</span>
                    </div>
                    <div className="minute text-center flex flex-column">
                        <span></span>
                        <span>Րոպե</span>
                    </div>
                    <div className="second text-center flex flex-column">
                        <span></span>
                        <span>Վայրկյան</span>
                    </div>
                </div>
            </div>
        </section>
        <section id="image-section" className="relative background">
            <div className="flex animation-div">
                <div>
                  <Image
                    src="/assets/images/erkrord.PNG"
                    alt="Description of image"
                    width={500}
                    height={500}
                  />
                </div>
                <div>
                  <Image
                    src="/assets/images/arajin.PNG"
                    alt="Description of image"
                    width={500}
                    height={500}
                  />
                </div>
            </div>
        </section>
        <section id="day-schedule" className="relative background flex flex-column align-center">
            <h3 className="day-schedule-heading">ՕՐՎԱ ԾՐԱԳԻՐ</h3>
            <div className="separator-div back-black"></div>
            <div className="church-div flex flex-column align-center text-center">
                <Image
                  src="https://static.tildacdn.one/tild6464-6261-4764-a562-653166653062/Ekexeci.svg"
                  alt="photo"
                  width={80}
                  height={100}
                />
                <span className="uppercase day-schedule-event-name">Պսակադրություն</span>
                <h4><span>14:00</span><br/>Մարիամ Աստվածածին</h4>
                <span className="place-span">Արմենակ Արմենակյանի փողոց, 225</span>
                <Image
                  src="/assets/images/mariam.png"
                  alt="church-photo"
                  width={500}
                  height={500}
                  className="church-photo"
                />
                <a className="uppercase" href="https://maps.app.goo.gl/JjUbkQNJpNr8PFWF9" target="_blank">Ինչպես հասնել</a>
            </div>
            <div className="flex justify-center photo-sec">
                <Image
                  src="/assets/images/ekexeci.PNG"
                  alt="ekexeci-photo"
                  width={500}
                  height={500}
                  className="church-photo"
                />
            </div>
            <div className="restaurant-div flex flex-column align-center text-center">
                <Image
                  src="https://static.tildacdn.one/tild6161-3731-4634-a264-633633346534/Zags.svg"
                  alt="photo"
                  width={80}
                  height={100}
                />
                <span className="uppercase day-schedule-event-name">Հարսանեկան հանդիսություն</span>
                <h4><span>17:30</span><br/>«Նոր Դվին» ռեստորանային համալիր</h4>
                <span className="place-span">Արմավիրի մարզ, Էջմիածին Աշտարակի խճուղի, 1 շենք</span>
                <Image
                  src="/assets/images/restaurant.png"
                  alt="church-photo"
                  width={500}
                  height={500}
                  className="church-photo"
                />
                <a className="uppercase" href="https://maps.app.goo.gl/iUE7WKWvND3xq9KDA" target="_blank">Ինչպես հասնել</a>
            </div>
            <div className="flex justify-center photo-sec">
                <Image
                  src="/assets/images/main.png"
                  alt="main-photo"
                  width={500}
                  height={500}
                  className="ekexeci-photo"
                />
            </div>
        </section>
        <section id="form-section" className="relative background flex flex-column align-center">
            <h3 className="text-center">Խնդրում ենք հաստատել Ձեր ներկայությունը միջոցառմանը</h3>
            <form>
                <div className="flex flex-column">
                    <label>
                        <span></span>
                        <input type="radio" name="come" value="accept"/>
                        Կգանք
                    </label>
                    <label>
                        <span></span>
                        <input type="radio" name="come" value="reject"/>
                        Չենք կարողանա գալ
                    </label>
                </div>
                <div className="flex flex-column">
                    <input type="text" name="guest_name" placeholder="Անուն Ազգանուն"/>
                    <input type="text" name="guest_count" placeholder="Հյուրերի թիվը"/>
                    <input type="submit" value="Ուղարկել "/>
                </div>
            </form>
        </section>
        <Script src="/assets/scripts/index.js"/>
    </main>
  );
}

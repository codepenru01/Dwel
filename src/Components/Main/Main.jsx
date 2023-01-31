import Main__img from "../../IMG/bg.jpg.jpg";
import Main__youtube from "../../IMG/youtube.png";
import Main__first from "../../IMG/first-img.jpg"
import Main__second from "../../IMG/second-img.jpg"
import Main__one from "../../IMG/one-img.jpg"
import Main__six from "../../IMG/six-img.jpg"
import Main__four from "../../IMG/four-img.jpg"
import Main__five from "../../IMG/five-img.jpg"
import Main__seven from "../../IMG/seven-img.jpg"
import Main__eight from "../../IMG/eight-img.jpg"
import Main__nine from "../../IMG/nine-img.jpg"
import Main__ten from "../../IMG/ten-img.jpg"

const Main = () => {
  return (
    <>
      <div class="container">
        <main class="main">
          <img class="main__img" src={Main__img} alt="Img" />
          <div class="main__box">
            <img class="main__box_youtube" src={Main__youtube} alt="Yotube" />
          </div>
        </main>
      </div>
      <div class="container">
        <section class="section">
          <h1 class="section__paragraph" id="PROJECTS">
            PROJECTS
          </h1>
          <div class="section__box">
            <div class="section__box_small">
              <div class="section__box_small_hover">
                <img
                  class="section__box_small_img"
                  src={Main__first}
                  alt="first-img"
                  title="Village Pt"
                />
              </div>
              <p class="section__box_small_paragraph">Village Pt</p>
            </div>
            <div class="section__box_small">
              <div class="section__box_small_hover">
                <img
                  class="section__box_small_img"
                  src={Main__second}
                  alt="second-img"
                  title="Franklin"
                />
              </div>
              <p class="section__box_small_paragraph">Franklin</p>
            </div>
            <div class="section__box_small">
              <div class="section__box_small_hover">
                <img
                  class="section__box_small_img"
                  src={Main__four}
                  alt="third-img"
                  title="Henderson"
                />
              </div>
              <p class="section__box_small_paragraph">Henderson</p>
            </div>
            <div class="section__box_small">
              <div class="section__box_small_hover">
                <img
                  class="section__box_small_img"
                  src={Main__six}
                  alt="four-img"
                  title="Hazelwood"
                />
              </div>
              <p class="section__box_small_paragraph">Hazelwood</p>
            </div>
            <div class="section__box_small">
              <div class="section__box_small_hover">
                <img
                  class="section__box_small_img"
                  src={Main__five}
                  alt="five-img"
                  title="Martin St"
                />
              </div>
              <p class="section__box_small_paragraph">Martin St</p>
            </div>
            <div class="section__box_small">
              <div class="section__box_small_hover">
                <img
                  class="section__box_small_img"
                  src={Main__one}
                  alt="six-img"
                  title="Concord"
                />
              </div>
              <p class="section__box_small_paragraph">Concord</p>
            </div>
            <div class="section__box_small">
              <div class="section__box_small_hover">
                <img
                  class="section__box_small_img"
                  src={Main__seven}
                  alt="seven-img"
                  title="Houston St"
                />
              </div>
              <p class="section__box_small_paragraph">Houston St</p>
            </div>
            <div class="section__box_small">
              <div class="section__box_small_hover">
                <img
                  class="section__box_small_img"
                  src={Main__eight}
                  alt="eight-img"
                  title="Hillsboro"
                />
              </div>
              <p class="section__box_small_paragraph">Hillsboro</p>
            </div>
            <div class="section__box_small">
              <div class="section__box_small_hover">
                <img
                  class="section__box_small_img"
                  src={Main__nine}
                  alt="nine-img"
                  title="Willow Ave"
                />
              </div>
              <p class="section__box_small_paragraph">Willow Ave</p>
            </div>
            <div class="section__box_small">
              <div class="section__box_small_hover">
                <img
                  class="section__box_small_img"
                  src={Main__ten}
                  alt="ten-img"
                  title="Brentwood"
                />
              </div>
              <p class="section__box_small_paragraph">Brentwood</p>
            </div>
            <div class="section__secret_img">
              <div class="section__secret_img_hover">
                <img src={Main__first} alt="first-img-secret" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Main;

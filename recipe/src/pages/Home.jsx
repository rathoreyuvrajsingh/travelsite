import React from "react";
import Navbar from "../components/Navbar";
import ".//Home.css";
import homebgbanner from "../Resources/homebgbanner.jpg";
import search from "../Resources/search.svg";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import TodayMenuBanner from "../Resources/TodayMenuBanner.jpg";
import RecipeCard from "../components/RecipeCard";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="img_header">
        <img src={homebgbanner} alt="homebgbanner" />

        <div className="text-overlay">
          <h1>Hungry?</h1>
          <br />
          <h2>explore more.</h2>
        </div>

        <div className="search_bar">
          <div className="search_logo">
            <img src={search} alt="My Icon" />
          </div>
          <input type="text" placeholder="Search What Your Tummy Need's." />
        </div>
      </div>
      <div className="Categories">
        <h2>Browse By Categories</h2>
        <ul>
          <li>All Recipes</li>
          <li>Rajasthani</li>
          <li>South Indian</li>
          <li>Fast Food</li>
          <li>Healthy</li>
          <li>Non-Veg</li>
        </ul>
      </div>
      <ProjectCard />

      <div className="today_menu">
        <h1>FOOD OF</h1>
        <h2>
          THE <span>DAY</span>{" "}
        </h2>
        <h3>Samosa</h3>
        <button>View Recipe</button>
      </div>

      <div className="OurTeam">
        <h1>Food Lover Team</h1>

        <div className="cards">
          <div className="cardsimg">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRUYGBgaGBgYGBgYGBgYEhgYGBgaGhgZGBgcIS4lHB4rHxgZJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHTQrJCs0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQxNDQxMTQ0NDQxNDQ0NDY0NP/AABEIAOcA2gMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA9EAACAQIEBAQEAwYFBAMAAAABAgADEQQSITEFQVFhBiJxgRMykaFCscEUUmLR4fAjcpLC8QczorIVQ4L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQMCBAX/xAAlEQACAgICAgICAwEAAAAAAAAAAQIRAzESIRNBBDIiUXGB0SP/2gAMAwEAAhEDEQA/AJKuEUnMRr1g1WgV1EtWSQORsZzs6EyqDBtGEhr4AWNtofWoBjpvIipGh2iNFfSBT0k1Kores6581raSIULMCNIxDmQgH0mE4hSvUb1m4rFsxHK0x2PXztCLMzAloCSLSElRDJRSO82YFhksZarW03lbRGsMVDcaX9ZlzSNrG2PL3iRdZf4DhS1E86qDyK3Vh+h+kGxHCGpm+68jzHY/zgsiY5YpRB6NOFLTk9DCm0ISjFZmgVKZhCKYQtKSKkdhQOs7khIpyUUoDBQDK5U8595eClA6NDzn3isCvdfNHusmxtOziNcST2UQMVjSsmKzmWICArOZZOVjcsBlxw/jyVAM3lPeWLKrDSxE8qoYhl5y84bxl0O/sdpe0yXZrqlAqbiK2YWMHw3GUewbQw/Q6jWJoaZT1sOy6rr/AMzgsSL6S1ZJDWwobWIZWvUGYiZ3HYW7maGpRIeVuOpnPHGNBN9IHwuCHOV+PqBmsvyjQd+8t1UhWbopP0F5nqUcukKKthlCwEuMOtwDKWn+suMAdJCR1wNbwWxUCWdbDKwsVuDKTgh8wuNOuk0yJcXhBWjOR0zM4nDGmbbqdj07GRrLniFPMjDna49RtK+lQlIuyE1Q1FjhTk6UJKKM2TBwkcKcKSnJFpQFYHkMGw6ecy5FKDUcN5zCgspOKpZhIGEsuP0bFT3leRIy6ZaOiIrG5ZKVnLTIyIrG5JPacywAwyLCEEhQwhFm2ZRovC2GWo+V9RNDxXhrYez0iSvNTr9JS+EBapNrxPVR7TneSUZMtxTSM9hseGtmBU9xaHWl02DR6Vio2mfGFdL2NwOsvHKnvoi4v0AYmmc8GxiDNLf9oRtCQDKrGJd9JaK7MSdoF4nZMPUPVco9WOX9ZkqJln4gxDl2p3sihDbTViL66X5ysY6RS7NxVdhVCql7FwDz3t9Zf8Lam3lzqSOXWZnB1FzZVoK9985Hv6QvH0Wo5KirlDBWKi5VCfwlr2uNem+l9bYcLKRyNHoqU1RA6nTtpbYf36y6SogUXcKSAdSOc8/8Oq+JRh8QoFUk+W4JHvA8fxZw4pvTZgllOrA6dBa9tN4sdp6NZEmrs9BxLKbhWBNtgRt6dILROg9JWUsTTuiKj0nW2j3yOpsSFc6HQg2vy6jSzpLp/ft9rTca5MhO+KJQ0V5wCPUSlERoMkDRypJUpQoBgeDpV88PFCQHDWe8KAqOPPfL6yvtLXj9OwB7ytAnPP7F46I7TlpIROWmDRHlnMsltOZYAYRcQB+H7SZcZ/D9pdrwQkbTq8GI5Tr4o5+TKzCcZem11WWGI8V13FsoHpOHhRvtCaPCu0w8UW7aNrJJezmG8V4m2Sy+tjeTNxGqd237TtHheu0nfC62jWOP6E5y/ZXimScxJvD6Cm+sIXCSalhTebMGV8TBVc3G6hvfLlH5SnpCa/xPwd3Q1VIsiNnB0JVbsLaa85kc2QFrXt+u0m1s6IytI2HB8JRdPOikjmQMw95XYzDio/wqdrewXTYX5wFMYQh1yrpfvfl2g4xQ/AzA2/De516ySjLss5xNt4Gw5BdSLHa3eWvEeE0j53ARg1g9iD2udvQmZLw7iqiOhcMM7WBysW23IG+s2NR0akyPWdt73srjsAANNe8cU+zMpK0F0sMMhY62Ghsv5gawNaQUDLz83uSbyswmKemhpM2YWJR9sy30uOTS5w4uqk9APppNRdyJ5FUf7GqsmRI9FkgljnEqyQNaNVbyQU4wF8SD1KvnEJ+HInoeYROwKnj7XUeolUm0u/EFGyX7ykp7TmyfYtD6itOWj7Tlpg2NtFaOtFaAFtRwwyiP/Zx0j1JsI4k9J2nKD/so6ThwohKk9JLaIZXjDgRj4eWBpxrU9I6FYOlLSSLREmRNI9EhQWQ4jCh0dD+NGX/UCP1nk1Op5WRxZlOVgdwy3BHsQZ7MonkPi2nkxle2xcMR3ZVa/wD5TLjZuMqBsTRzoEU6/N126e15Z8Gpo9kcOr20IZchsDrawPT7ygwuJKOpvoPyP/J+s0WHRmF1y3AuPfoZl9FoNSZuuEcH+GQRidCPlyE9eQbQyn8eYWuyXptmRbZsyj4gbNspHyrbU36fUPglXEs4Xyix/e+u2280HibFBKOS/nbTTa5359Lwj36CfXdg/C6C/DQtr5DzubnvCeE8VWo5QD5b68jrMsOIu9gCFQKFNtDYDbrrLrw46ByAwvaCVMxKScTV5JIEnFGsmCytEbGIkkAjgsQEQjoWMy+YSYRrDUTQFZ4iT/CMzCbTWeIB/gt6TJ09py5tl8Wh0UUUkUFFFFEBf0GBAkpYRmFoaSQ4adxyiFp206MPaIpABtpxxpOGdY6QAVJNJOqiQpUFo5akAJSs818dcOcVWxGW9N8oLDZWUBLN0vYWOxvbeeh1a4IKqbnnbkOcVNQVykAg3BB1BB5EcxB9jTo8MqJ0On3hmGxDrazHS1teX6ze8a8CU3u2Hb4bfuG5pE9jun3HQCYXiPBMRhmyujLc+U7o3+Vx5T1tv1EP5Gt9FjheMVEbOGsSLDXbXW0OoJUxbkkaE+Zjewv0kfh/hIfzVAt9/Mb/APiuh95pq9daa5KCGpVOiIi3JPoNAo68hubRWlo3Tezz3xhRahiCischRSljuoGRibc8yMPaDeGajtiaYzsNb79JsfFvherTweFZxnqq1f4xUFlX4r/EALDkDmF9rsZnPD2EZMSjEaX/ADm66JN2z2vCjQekJIgmFbQekJYwEImK8hepaQPWMVhQcricdtRA6RMmc6iICLjmtJ/QzIUzpNbxlv8ACb0MyNLac+b7Iti0SxRTkkVOxRRRAabBnSSu1oPg9o+qZ3HKdNSLNIGMSMToIAdLSJrtoAT6SxSkUAK779/SGJVDAE7Hn/OOhWUyYVwNR7aEzv7OPxEntsJdiiI2thVPrCgsphheh06W1kqUiL/37wsoFBzSehTA2/EL2PSFBYFSbWx5wx8MrpkZQykaq4BU+oMIp630tbT6R8YjPHwlRz5gzovNFby+xIJA7X+kusBgKdEZaaBBzI1Zv8zHVvcwkCdAgkkNyb2JhM5xvwwlQfEpKqVAc2gCo9twRsD3Hv20hnCIxFBgiwADqVa2oIsYRVq2lpkDDUA+og1bAI3Ve4P6GZodlQat45dYaeEkfK9/UW+4kT4F1BNxpyFyfyipjscmkVRtRIleNrvtABcXH+G3pMnR2ml4g96Z9JmqW05832RbHoliiikigoooogL3BVdDJajyrweGZPxXhLtO6zmHu8MwSDQc5WYYF2Pb85a0iAfaNCZZlb6fY/pIkTKSPwtuOhkqJdR+Y5TrLcWb0v8AkfSMyMptkbKdjsYU630g9VCyfxD8xJMPUzKIAQVEzDuN+4jsGPKAdSpIB5gfy/lH11t5h7/zjU0II2bQ9m5QAIy22jpwGdAjA5eK8TCIGADopwTsAGLzEdGutwRci43G4uNxAaVfK2Q3Y6kkMzmy6E6/Kdfl58trRpWrMylxassQYgJTU8ZWYI9gQyoyolgxzfMXzA6C99wNIVTouEUMWLDKXYOfNbfKvK972FtppwrbMLKnpM7j8JcF135jr/WUmKewE0uGZivmvubX0Yi+hI62lJ4hw4RM42LWI6E3OnbQyUlRaLsrcZVuntKWltC6tW6+0Epzly7L49EkUUUmUOzkUUQFfj+I4mmLlRaE06tZqZqMbaXtIMTWLga312hOJxyJRKHfLOsg1Ro+E0wKSG4YsuZiNRdtdPTQe0MyzLeB0qCkWLXRmbIv7tiQxvyueXa/ObJH62MojDOYZyDLFdYKaQOq/STUjpbmI0ZEos1uRH5SGnpe3UkQo6+ogtP5iOht7bj7WgAQjBhIFG6/T1GojQ2VpLUF/MIASq0dntvGIwy+n/Mc63FvpGBJIzI8PU5GTMIAJY6MEfABi/pOuoIN+YsetvWcp8vedbpADlJAFAAsAAAOw2j41RE8AOgyr45SWrTZM4V7hkubAsBoL9wfa8s1M6ImNHmqVLqPSdpy+8W8NIb462y2CuALEHYN3B0H09qFDOTKqkdEHaHxXjTOyZsRM5ecMV4AVCILgjtFxJdNf3YsE1x9IuK6adjOkiXXgZHXD5r3DO5AOwAsp9NVM1lFw2/lP1EzfgYj9lS2+d79jnP6Wmn8vMfQyqJsmVWXv3EJpVAfWMpkWFj/AH3jwL9+8ZknI5wV0s5PJgPqL3+2WEqZHidFJ6a/z+0YENdL6yKjWymxkpqQbEOl7ZlDdLjN9IgC6NsxG6kXH6j7whFA0EpaWKyuAdibe5ltRqgwTG0R11sbyek9xO1kuIFmKmAg22s6DGJUvHGMAeqdY+u+VGNtlJ+gnKq637/yna7hUa+1ifa2sAB8MxVEFzoqj1sBHU8SS7rYZVVbnmXNyR6BSn+rsYJRrlaSc3IVVB5vl59hYk9lMqcdxF2HwcMwJOj1dyOoS2ha9yTsL6dsuSS7NRi5OkaY11uRmUW3129ekko1la5BBA00nm3EA9FlRnL2tZL6+rEW5jnNF4exriwe935E5rAXAOe+t7dJNZe6KvDUbs1NamrqUYAqRYg7ETG8W4IaALqwKZrWPzi+w6H1+02SHSMxOGSouR1zKeWu45gjYzc4KSJwk4s87BnZJjcM1N2RgRYm1+a8iDz0kN5xNUdIjOTt5yAFJwppLxk6j0MG4MbkiEca0I951Mgi68A1x+zsvMVHB9wpH2M1at2nnPgHF5a1SkTo4zD/ADJ/Qn/TPRVJlEYZIlVhsPtCaOJvvI6bdRJVpgxiCVqW3nXAZSp2IIuO4tI0TSx1HLqIshG0BGI4zxXEI70TZAn4wLsw/CVJ0Fxb01ldw9wwJIOYnUm5JPUk6zV+JOEnE5GR1R0uPMDlZWIOpGotqR6nbeSJ4cT4ARPnW9nOhc883bp0kZxkzqx5IKiop3tYk9v0teWWFxxU6n9PtKdnKEowykGxB3Bk9BgecisjTotLHFo12ExyOPnW/S4v9I+vT5iY5kF7Wio4gF8motzlVnXtEH8f9M1lM2MJUzMsjKPmP1kTVW/eP1M15kvRlYG/ZrM28qPEFa1Fx+8uQetQimP/AG+0p/2pxu7D3O0eMYx1zk9yYvPEPBL9gfFUxGIdUopUCIrAtbJTcta/ma1wALaHW55GG8K8L1EWxqhAdWyjM/sTovrrH4bFVEOZHLDmjsSjdgTcofTTsZocJildA6XtsVPzKRuCOREceMthJygqRDhuD0UFsgY7ln8zE9STzktLAU0OZECk8xf8jsPSE3vOVPllFFL0ScpPbHKgitEjaTpM0ZKXxHw9XQ1DcMiki2oI3IP8+VzMvT4dUZPiBPLYncXsNzbpPQWUMCDqDoR2O8wWA4w3wKmGcEPTZ6OcC4IRyNQdrr06yGWMfsy+FTn1FX/gDeNvGkzk5iz/AB6ZR+HDeoR2/WF+IhZh6n8pWeHHtWPofzln4nOqnv8ApOtnMjO8KxRpVw4/CwPt+IfQkT2LD1A6hlOhAII2IOoniKt52nq3hitfD0j/AAKPdfKw+o+80hM0KEjnCFaD0nBk9gPxCaMsnV441INnHUn0BkdWuP3SYWKh1Wpcw3DN5B/fOVHxv4ZZYV7oPcfeCY2B8b4WtUZ1FnA5fjH7p79DMxXoNTJDAqehH3m33tIeIcOSsAHuLbFTZh1F+Y7GRyYVLtbLY8zj09HndbiJS9vvAKfHGzX0J+4l54u8MLSp/GR3YKfMjFLkHQZSqi5vbQ8r9J57hVObcKeh0kfDR0rMno1o8Q1On850+IH/ABLKFajp8wNv3hqn+oaQ3D44D5lBEy01tFE09B54+Oa/mIhx1NR/xGo+Hc2ZQNPvHvwCi/ysR7zPQ6YVh+Nr1h2A8QrRqByfI5C1ByH7r+o2PY9hM9U8NuPlqfWBYnh9VAQdY4yp2mZlFSTTR7WjAi6m4OotEH3BnnXgjxIyMuGqXI2ptvoBfIelgND7dJ6IwDC43ndGSkrR584uLpjl2Eaz6hb2O46HteR/Ejg4PeaMEgb+o/WZJ+GIcbiMxbzfDqhQbKcyZG13+ZL+81gftPM/GnFalDiCOmoKqhB2Olyu/Rrzl+XCc8TjB0/TL4JuErTroseOcNWmoZGOpK+axtpcWsB3lvguMr8NMxGbIua1rXsL206wDxVhan7MlQtc0wvxFAGW9rFxz3OvbXlMB/8AKHpOfBHLijxydso6yflZH4fNq31l5x/Ds9rcj+krODqgYG/m1/u0N8QYllTym207Hsil0ZIi1RhPRvA9fNhivOnUYezWf/efpPM1Y5zebDwHjMr1KZPzqGX1S9/chv8AxmzJ6LSeF0qnUX/P6QDDczJw8dios1ZTt/X6SGuf4SfpGoDYHeL4jDleMQE9R+SgesO4Y5IZW3vf2kT0y2q3HtG4ag6vm3HPYaGJDZYI+t+klOsbTUATK+LvEWVXw9BgKhGV3N7ICNQtt2sd+V+sHJRVsIxcnSHcT43SrMUBBRSQDyY7FvTp/WUOOwOFqgjY9RuJQ0eHPb/ujTop/WF0uH2+Zye4nJKbbs74QSVIqMXwhqZvTe47Gxt3EBSlVB0K+hGn2mlrYFbHzNbvYe8q6tMA6H7wU2NwSdgKYsA5WGQ9d1+vKHpinTUHTqDA6yId/wCsfRolfMLqpO3I+gjpP0Lk4vZa0uMEb6zmJ4jmG8s6nhTOivSfRgCA4N9eRZQdfaBjwbiSQC6KvNsxYgdlA1PbSHhDzooVd3dVphi5YZAgJfMNQVA5i1/aexcK4hUNGn8VMlVrBkuptY+Y+XYHe3LMBKfgnA6eGQ5Llz8ztb4j9rj5V7D3vLFXswPcSsVxOab5E1THOCbBWHQjUe/OJMe7fLTUd7GDviNb6AwcYmoTYMQL6WHL6TfInxL9KxC5nNrC5J00G5ma4fhExSNiGp0qhao7KKqElLNZV35ADW3ON8Q0iuGd2c3sLjm1yAFJ6XMB/wCn+M/7tEno6+/lf/bI5MnaRuEOmzW0TVdBmSlYrYrnLLtYqQU23EpX4VWubYTBWubeVduX/wBM0GDexdehDD0e/wDuDfWFX/vWWjUopkn+Lo+ecJiwj3PImWPEuLLUUADp9pTtSsSNzHKsKvs1dDX1a42ktGsyMHRirKbgjcHb8jGuthIs0YjTYfxa4AFRM7D5XVsjehFiD9vSabAcYqPSSpltmBNr6ixI35jSeZs2k9bw3DglKmlvkRFPchRf73iaNJhHCOMVn0CLkvqzEgDrl01P96S9/aieQH5zMPXdNgNNhbQDsOUanGXXdAfeHIHFM1RxPeDVMUS1+QH3MrMNxdH01Vuh/Q84Yg3hyFxon4xxtMPRZ7guRlRNfM52v0A3M8nas7uztcszFmPUsbk/Wem4vgyYlFZzYUyx5ZdQL3v6Smw/htGcHLZTfLa9tBf72mZJyKQkooydPEtzIHa4EJRqz6IGP+VWb7gT0HAcFRCfIvZtJapQC7CLwob+Q/R5pT4Bin/AR/nYKPtc/adHhCsT5nVF528zn05D7z0spIHp3j8aRh5pMxA8NIpXKLhdST8zHuenaPqcHzFRsomoq0ekHqDkIuNDUrBEdk0Q2Gmm40FoLx7i1Shh2rBVcoVzA3HlZgptbY3IliKcg4nhPi0alL99HUepU5T9bRoDzvi3jrEVQEp2ojmVYlyegewyj017yXD+Jq+HoUmZxWaoahK1CzMoRsvzAg6m+5PyzF8zfvPQP+nfC6FelVatSWoyuoUtqQCu2/WbdJErYfwDxX+0FlNNFIANgWOn1mmpYojYCUXGsLSw9SgadJUDfEBygAn5CL2lhQqC08r5Wd457dHXihyjZzxQzPhm/hZWIHQG3639pnPDeL+HiabcmORvR/L+ZU+0v+N1rYeqRuEY/QXmOy5nVxtl0t6Xjw5PLFyNuPHo9edsro3I3Q9PNqp/1KB/+oXeZ/w/jziKCs5zOCQ2g+ZWuDYbcjLfP3nZjyUjmnjbZ4RWXzt6mdFliil1owQV6l5ABFFGIsOBYbPiKKHY1Uv/AJQcx+wM9kcXnIoACVKQMGqYMcooomaQFVwkteH5hYXuCOe49IookN6Da9VqYCMAUY3J5+luklVQhTL8pYadPT6xRTXswWYMWaKKaMCzRkUUAGOIO1IXvFFExogZROokUUybPA+LravWHSrUH0czc/8AS2rZMQP4qZ+zTsU1LRhBvjDEXbD9mf7qJLhq/lE5FPH+elaPQ+N9RvFK2ajUHVH/APUzOcObyKP3Rl/l9ooo/hr/AJv+QzfZGm8J8SFIVlNyAhqAd10P6TbIwIBudQDt194op1QVkJuj/9k="></img>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

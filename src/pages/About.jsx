import multiplePizzas from "/assets/images/multiplePizzas.jpeg"
import { useTitle } from "../hooks/useTitle"

export const About = () => {
  useTitle("About");

  return (
    <div className="px-9">
      <div className="w-full h-48 overflow-hidden">
        <img src={multiplePizzas} alt="" />
      </div>
      <div className="text-2xl font-semibold">About Us</div>
      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic numquam possimus praesentium, excepturi
        eveniet veniam dolorem inventore dignissimos in harum temporibus quis perferendis distinctio omnis,
        aliquid aperiam, dicta ullam tempora exercitationem quidem quaerat? Reiciendis molestiae et esse culpa
        saepe minima amet sapiente vero vitae commodi dolor earum, numquam, velit enim blanditiis illum in
        voluptas aspernatur nemo tempore veniam praesentium. Quis ad, enim odit voluptates sed nesciunt,
        praesentium impedit iure, quidem mollitia magni dolorem numquam! Vero quas maxime magnam atque ea
        molestiae. Asperiores rerum praesentium dolore totam commodi error placeat voluptatem, temporibus quo
        architecto nostrum omnis ad maxime natus ullam enim, dicta saepe qui accusantium voluptas optio. Eos
        iure non magni eligendi illum, explicabo fugiat dolores sapiente voluptatum voluptates voluptate sint
        perspiciatis tenetur voluptatem et a quaerat ullam sed perferendis debitis officiis enim consectetur.
        Architecto ipsum, ad quo provident optio, repellat nesciunt expedita velit cum nemo praesentium
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, tempore? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Aperiam quasi voluptatem quis, nam veniam repellat non similique in 
        asperiores alias laboriosam accusamus cum, iusto atque? Reiciendis repellat, asperiores, dolores sit 
        perferendis minima placeat provident inventore soluta quo illo laboriosam distinctio ratione. Nulla 
        pariatur sapiente soluta cumque ipsam, facilis quibusdam eveniet.
      </p>
    </div>
  )
}

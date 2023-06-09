import { Icon } from "@iconify/react";

function NavIcon() {
  return (
    <div>
      {" "}
      <a href='#top' className='scroll-smooth'>
        <Icon
          icon='material-symbols:expand-circle-down-outline-rounded'
          rotate={2}
          width='40'
          className='mt-4 mb-4 m-auto'
        />
      </a>
    </div>
  );
}

export default NavIcon;

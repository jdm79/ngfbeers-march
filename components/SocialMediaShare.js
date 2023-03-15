import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
} from "next-share";

function SocialMediaShare({ title, id }) {
  const blurb = `${title} are on ngfbeers.com, a showcase of gluten-free beer companies who make their beer without barley or any other gluten containing ingredients. Gluten-free beer that is actually gluten-free!`;
  const link = `https://ngfbeers.com`;
  const beerLink = `https://ngfbeers.com/companies/${id}`

  const hashtags = ["glutenfree", "glutenfreebeer"]; 

  return (
    <div className="space-x-3">
      <FacebookShareButton url={link} quote={blurb} hashtag={"#glutenfreebeer"}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={link} title={blurb} hashtags={hashtags}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton url={link} title={blurb} separator="  ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <EmailShareButton url={link} subject={blurb} body={blurb}>
        <EmailIcon size={32} round />
      </EmailShareButton>
      <TelegramShareButton url={link} title={blurb}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <RedditShareButton url={link} title={blurb}>
        <RedditIcon size={32} round />
      </RedditShareButton>
    </div>
  );
}

export default SocialMediaShare;
import DefaultLayout from '@/components/DefaultLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';

const aboutPage = () => {
  const router = useRouter()

  return (
    <DefaultLayout>
        <div className="w-screen text-black  dark:bg-black dark:text-white">
          <h1 className="w-screen flex p-5 justify-center border-b-2 border-black bg-white" >About Page</h1>
          <p className="p-5 font-courier">
            This website is a showcase of naturally gluten-free (or ngci) beer companies.
            We want to celebrate beer that coeliacs can drink!
          </p>
          <p className="p-5">
            We also want to shine a light on these companies and to educate consumers about the risks
            of drinking what is currently labelled as ‘gluten-free’ beer in Europe (and elsewhere).
          </p>
          <p className="p-5">
            For more information about this topic, 
            please go to the <Link href="/links" className='underline'>Links section</Link> for 
            explanations on why most  ‘gluten-free beer’
            is not fit for consumption by coeliacs. 
            There is also a 
            great <Link href="https://zerotolerance.mywikis.wiki/wiki/Gluten_Reduced_vs_Gluten_Free" target="_blank" className='underline'>resource here</Link> from
            the people at <Link href="https://zerotolerance.mywikis.wiki/wiki/Main_Page" className='underline' target="_blank">Zero Tolerance Gluten Free Brewing Wiki</Link>
          </p>
          <p className="p-5">
            At the moment, we only list European companies, 
            but we will be adding companies from around the world.
          </p>
          <p className="p-5">
            If you are a ngci beer brewer/company - 
            or know of one we have missed out, 
            contact us 
            at <button type="button" onClick={() => router.push("mailto:ngfbeers@gmail.com")} className='underline'>ngfbeers@gmail.com</button>.
          </p>
          <p className="p-5">
            
          </p>
        </div>
    </DefaultLayout>
  )
}

export default aboutPage;
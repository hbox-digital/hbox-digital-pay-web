import Container from '@/components/Container'
import BusinessSolutionsSection from '@/components/home/BusinessSolutionsSection'
import BusinessTypesSection from '@/components/home/BusinessTypesSection'
import CoreServiceCard from '@/components/home/CoreServiceCard'
import CtaSection from '@/components/home/CtaSection-center'
import FaqSection from '@/components/home/FaqSection'
import HardwareSliderSection from '@/components/home/HardwareSliderSection'
import HeroSection from '@/components/home/HeroSection'
import BigIdeaSectionCTA from '@/components/home/homecta'
import KioskSection from '@/components/home/KioskSection'
import KitchenDisplaySection from '@/components/home/KitchenDisplaySection'
import OperationsSection from '@/components/home/OperationsSection'
import TrustedBanner from '@/components/home/TrustedBanner'
import WhyChooseSection from '@/components/home/WhyChooseSection'
import React from 'react'


const page = () => {
  return (
    <div>
      <HeroSection />
      <BusinessSolutionsSection/>
      <TrustedBanner />
      <div className='py-10'>
          <Container>
            <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
            <div className="max-w-[800px]">
              <h2 className="max-w-[820px] md:text-[60px] text-[40px] font-light leading-[40px] md:leading-[68px] tracking-[-0.04em] text-black">
                Powerful Solutions 
                <br />
                <span className="font-medium text-[#53B033] text-[40px] leading-[40px] md:text-[60px] font-semibold md:leading-[68px] tracking-[-0.04em]">
                 Built for Your Business
                </span>
              </h2>
            </div>

            <div className="max-w-[420px] lg:ml-auto">
              <p className="text-[15px] font-normal leading-[1.45] tracking-[-0.03em] text-black/80 sm:text-[16px]">
               From payments to operations, HBOXPay gives businesses the tools to manage sales, simplify workflows, and grow with confidence.
              </p>
            </div>
          </div>
          </Container>
</div>
      <CoreServiceCard
  title="POS Software"
  subtitle="CORE SERVICES"
  description="Manage sales, billing, staff activity, and daily operations through a fast and reliable POS system built for modern businesses."
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624934.png"
  imagePosition="left"
/>
      <CoreServiceCard
  title="Payment Processing"
  subtitle="CORE SERVICES"
  description="Accept card payments, QR transactions, and digital wallets with secure processing designed for smooth everyday transactions."
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624936.png"
  imagePosition="right"
/>
      <CoreServiceCard
  title="Hardware Solutions"
  subtitle="CORE SERVICES"
  description="Modern POS hardware designed for fast checkouts, seamless operations, and reliable performance across busy business environments."
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624939.png"
  imagePosition="left"
/>
      <CoreServiceCard
  title="Inventory Management"
  subtitle="BUSINESS MANAGEMENT SERVICES"
  description="Track stock levels, monitor product movement, and manage inventory in real time with better operational visibility."
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624940.png"
  imagePosition="right"
/>
      <CoreServiceCard
  title="Analytics & Reporting"
  subtitle="BUSINESS MANAGEMENT SERVICES"
  description="Access clear business insights, sales reports, and performance data that help teams make smarter business decisions."
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624946.png"
  imagePosition="left"
/>
      <CoreServiceCard
  title="Employee Management"
  subtitle="BUSINESS MANAGEMENT SERVICES"
  description="Manage staff schedules, permissions, attendance, and daily activity from one connected business management platform."
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624948.png"
  imagePosition="right"
/>
      <CoreServiceCard
  title="Multi Store Management"
  subtitle="BUSINESS MANAGEMENT SERVICES"
  description="Monitor multiple locations, manage operations centrally, and keep your business connected across every store."
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624947.png"
  imagePosition="left"
/>
      <CoreServiceCard
  title="Customer Management (CRM)"
  subtitle="GROWTH SERVICES"
  description="Build stronger customer relationships with tools designed for customer tracking, engagement, and repeat business growth."
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624949.png"
  imagePosition="right"
/>
      <CoreServiceCard
  title="Loyalty Programs"
  subtitle="BUSINESS MANAGEMENT SERVICES"
  description="Create rewarding customer experiences with loyalty programs that encourage repeat visits and long term retention."
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624952.png"
  imagePosition="left"
/>
      <CoreServiceCard
  title="E-commerce Integration"
  subtitle="GROWTH SERVICES"
  description="Connect your online store with payments, inventory, and business operations through one seamless platform."
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624953.png"
  imagePosition="right"
/>
      <CoreServiceCard
  title="Invoicing & Accounting"
  subtitle="ADVANCED SERVICES"
  description="Generate invoices, manage transactions, and simplify accounting workflows with accurate financial reporting tools."
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624956.png"
  imagePosition="left"
/>
      <CoreServiceCard
  title="Business Financing"
  subtitle="ADVANCED SERVICES"
  description="Access flexible business financing solutions designed to support cash flow, expansion, and long term business growth."
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624957.png"
  imagePosition="right"
/>
      <BigIdeaSectionCTA
        titleOne="Built by the Team Behind "
        titleTwo="HBOX Digital"
        paragraph="From payment systems to custom software and mobile applications, HBOX Digital builds technology solutions that help businesses operate smarter and scale faster."
        imageSrc="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624993.png"
        sideImageSrc="https://cdn.hboxdigital.com/public/hbox-pay/images/Phone%20-%20Mockup%20-%20IV%20(1).png"
        buttons={[{ text: "Start Your Project" }]}
      />
      <OperationsSection/>
      <BusinessTypesSection />
      <KitchenDisplaySection />
      <HardwareSliderSection />
      <KioskSection />
      <WhyChooseSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}

export default page
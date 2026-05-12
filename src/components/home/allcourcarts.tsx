"use client";

import React from "react";
import { motion } from "framer-motion";
import CoreServiceCard from "./CoreServiceCard";
import Container from "../Container";

const Allcourcarts = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="py-10"
      >
        <Container>
          <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
            <div className="max-w-[800px]">
              <h2 className="max-w-[820px] xl:text-[60px] md:text-[50px] text-[40px] font-light leading-[40px] md:leading-[68px] tracking-[-0.04em] text-black">
                Powerful Solutions
                <br />
                <span className="font-medium text-[#53B033] text-[40px] leading-[40px] md:text-[50px] font-semibold xl:leading-[68px] tracking-[-0.04em]">
                  Built for Your Business
                </span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="max-w-[420px] lg:ml-auto"
            >
              <p className="text-[15px] font-normal leading-[1.45] tracking-[-0.03em] text-black/80 sm:text-[16px]">
                From payments to operations, HBOXPay gives businesses the tools
                to manage sales, simplify workflows, and grow with confidence.
              </p>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CoreServiceCard
          title="POS Software"
          subtitle="CORE SERVICES"
          description="Manage sales, billing, staff activity, and daily operations through a fast and reliable POS system built for modern businesses."
          image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624934.png"
          imagePosition="left"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CoreServiceCard
          title="Payment Processing"
          subtitle="CORE SERVICES"
          description="Accept card payments, QR transactions, and digital wallets with secure processing designed for smooth everyday transactions."
          image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624936.png"
          imagePosition="right"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CoreServiceCard
          title="Hardware Solutions"
          subtitle="CORE SERVICES"
          description="Modern POS hardware designed for fast checkouts, seamless operations, and reliable performance across busy business environments."
          image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624939.png"
          imagePosition="left"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CoreServiceCard
          title="Inventory Management"
          subtitle="BUSINESS MANAGEMENT SERVICES"
          description="Track stock levels, monitor product movement, and manage inventory in real time with better operational visibility."
          image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624940.png"
          imagePosition="right"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CoreServiceCard
          title="Analytics & Reporting"
          subtitle="BUSINESS MANAGEMENT SERVICES"
          description="Access clear business insights, sales reports, and performance data that help teams make smarter business decisions."
          image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624946.png"
          imagePosition="left"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CoreServiceCard
          title="Employee Management"
          subtitle="BUSINESS MANAGEMENT SERVICES"
          description="Manage staff schedules, permissions, attendance, and daily activity from one connected business management platform."
          image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624948.png"
          imagePosition="right"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CoreServiceCard
          title="Multi Store Management"
          subtitle="BUSINESS MANAGEMENT SERVICES"
          description="Monitor multiple locations, manage operations centrally, and keep your business connected across every store."
          image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624947.png"
          imagePosition="left"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CoreServiceCard
          title="Customer Management (CRM)"
          subtitle="GROWTH SERVICES"
          description="Build stronger customer relationships with tools designed for customer tracking, engagement, and repeat business growth."
          image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624949.png"
          imagePosition="right"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CoreServiceCard
          title="Loyalty Programs"
          subtitle="BUSINESS MANAGEMENT SERVICES"
          description="Create rewarding customer experiences with loyalty programs that encourage repeat visits and long term retention."
          image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624952.png"
          imagePosition="left"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CoreServiceCard
          title="E-commerce Integration"
          subtitle="GROWTH SERVICES"
          description="Connect your online store with payments, inventory, and business operations through one seamless platform."
          image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624953.png"
          imagePosition="right"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CoreServiceCard
          title="Invoicing & Accounting"
          subtitle="ADVANCED SERVICES"
          description="Generate invoices, manage transactions, and simplify accounting workflows with accurate financial reporting tools."
          image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624956.png"
          imagePosition="left"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CoreServiceCard
          title="Business Financing"
          subtitle="ADVANCED SERVICES"
          description="Access flexible business financing solutions designed to support cash flow, expansion, and long term business growth."
          image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624957.png"
          imagePosition="right"
        />
      </motion.div>
    </>
  );
};

export default Allcourcarts;
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import SidebarLayout from "../../../components/Layouts/SideBarLayout";
import Back from "../../../../public/svgs/back.svg";
import Image from "next/image";

export default function privacypolicy() {
  const [PrivacyPolicy, setPrivacyPolicy] = useState("");

  useEffect(() => {
    const axios = require("axios");
    let data = JSON.stringify({
      slug: "Policy",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://talktango.estamart.com/api/get_page",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        // Set the policy content (assuming it's HTML)
        setPrivacyPolicy(response.data.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <SidebarLayout>
      <div className="sm:mt-3 p-4 mt-10">
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/dashboard/settings"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground h-9 w-9"
          >
            <Image src={Back} alt="Back" loading="lazy" />
            <span className="sr-only">Go back</span>
          </Link>
          <h1 className="text-lg font-medium">Privacy Policy</h1>
        </div>
        <div className="flex flex-col gap-6">
          {/* Render the Privacy Policy using dangerouslySetInnerHTML */}
          <p
            className="text-[#333333] text-sm"
            dangerouslySetInnerHTML={{ __html: PrivacyPolicy }}
          />
        </div>
      </div>
    </SidebarLayout>
  );
}

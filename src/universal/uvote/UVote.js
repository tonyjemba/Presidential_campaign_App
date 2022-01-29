import React from "react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";

const UVote = () => {
  return (
    <div className="w-100 flex flex-column justify-center items-center mt5 mb6">
      <Helmet>
        <title>Download the UVote App | A New Uganda.</title>
        <meta
          name="description"
          content="kyagulanyi for president 2021. This website was established to support Kyagulanyi's campaigns and provide information to the public regarding the unlawful political persecution of  Kyagulanyi Ssentamu Robert (Bobi Wine) and the Ugandan people"
        />
        <meta
          name="keywords"
          content="bobiwine, UVote,App,Download,kyagulanyi, Ssentamu, Robert, NationalUnityPlatform,NUP,people,power,uganda, campaigns, president, website, bobi, wine, kyagulanyi2021,weareremovingadictator"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Download the UVote App| Campaign Website People Power"
        />
        <meta
          property="og:description"
          content="kyagulanyi for president 2021. This website was established to support Kyagulanyi's campaigns and provide information to the public regarding the unlawful political persecution of Kyagulanyi Ssentamu Robert (Bobi Wine) and the Ugandan people."
        />
        <meta property="og:url" content="https://kyagulanyi2021.com" />
        <meta
          property="og:site_name"
          content="kyagulanyi2021 Campaign Website"
        />
        <meta name="twitter:creator" content="@jemytt" />
        <meta
          name="twitter:description"
          content="Consider using a VPN if you are facing a problem with connection to the server. This is the  Official latest APK of UVote, you can also download it directly from https://me.uvote-uganda.com "
        />
        <meta
          name="twitter:title"
          content="Download the UVote App from Kyagulanyi2021 Campaign Website"
        />

        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/projectk21-1a365.appspot.com/o/images%2FEqvYwaTXUAA-OAN.jpg?alt=media&token=59a60dbd-308f-45c6-b708-76c1864acd41"
        />
        <link rel="canonical" href="https://kyagulanyi2021.com" />
      </Helmet>
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/projectk21-1a365.appspot.com/o/images%2FEqvYwaTXUAA-OAN.jpg?alt=media&token=59a60dbd-308f-45c6-b708-76c1864acd41"
          alt="Download UVote.apk"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
      <div className="mt4">
        <a
          href="https://me.uvote-uganda.com/download/Uvote-signed.apk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
          >
            Download UVote App
          </Button>
        </a>
      </div>
    </div>
  );
};

export default UVote;

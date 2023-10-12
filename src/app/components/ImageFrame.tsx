"use client";

import { ComponentPropsWithRef } from "@react-spring/web";
import React, { forwardRef } from "react";
import { IconUploadImage } from "../icons";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage, placeholder } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CldUploadWidget } from "next-cloudinary";

export interface ImageFrameProps extends ComponentPropsWithRef<"div"> {
  img?: string;
}

export const ImageFrame = forwardRef<HTMLDivElement, ImageFrameProps>(
  ({ img }, ref) => {
    const profileImage = React.useMemo(() => {
      if (!img) {
        return undefined;
      }
      const cld = new Cloudinary({ cloud: { cloudName: "do1bhfub8" } });
      const profileImage = cld.image(img).resize(fill().width(193).height(193));
      return profileImage;
    }, [img]);

    return (
      <CldUploadWidget uploadPreset="profile">
        {({ open }) => {
          function handleOnClick(e: any) {
            e.preventDefault();
            open();
          }
          return (
            <div
              className={`image-frame ${
                profileImage ? "" : "image-frame-empty"
              }`}
              ref={ref}
            >
              {profileImage && (
                <AdvancedImage
                  cldImg={profileImage}
                  className="absolute"
                  plugins={[placeholder()]}
                />
              )}
              <div className={`overlay ${profileImage ? "" : "overlay-empty"}`}>
                <IconUploadImage width="33px" height="33px" />
                {profileImage ? (
                  <span>Change Image</span>
                ) : (
                  <span onClick={handleOnClick}>+ Add image</span>
                )}
              </div>
            </div>
          );
        }}
      </CldUploadWidget>
    );
  }
);

ImageFrame.displayName = "ImageFrame";

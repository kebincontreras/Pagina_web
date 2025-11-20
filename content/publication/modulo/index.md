---
title: "High Dynamic Range Modulo Imaging for Robust Object Detection in Autonomous Driving"
authors:
  - Kebin Contreras
  - Brayan Monroy
  - Jorge Bacca
date: "2025-11-19T00:00:00Z"
doi: "10.1007/978-3-031-91767-7_12"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-05-12T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *ECCV 2024 | European Computer Vision Association (ECVA)*
publication_short: In *ECCV*

abstract: Object detection precision is crucial for ensuring the safety and efficacy of autonomous driving systems. The quality of acquired images directly influences the ability of autonomous driving systems to correctly recognize and respond to other vehicles, pedestrians, and obstacles in real-time. However, real environments present extreme variations in lighting, causing saturation problems and resulting in the loss of crucial details for detection. Traditionally, High Dynamic Range (HDR) images have been preferred for their ability to capture a broad spectrum of light intensities, but the need for multiple captures to construct HDR images is inefficient for real-time applications in autonomous vehicles. To address these issues, this work introduces the use of modulo sensors for robust object detection. The modulo sensor allows pixels to ‘reset/wrap’ upon reaching saturation level by acquiring an irradiance encoding image which can then be recovered using unwrapping algorithms. The applied reconstruction techniques enable HDR recovery of color intensity and image details, ensuring better visual quality even under extreme lighting conditions at the cost of extra time. Experiments with the YOLOv10 model demonstrate that images processed using modulo images achieve performance comparable to HDR images and significantly surpass saturated images in terms of object detection accuracy. Moreover, the proposed modulo imaging step combined with HDR image reconstruction is shorter than the time required for conventional HDR image acquisition.

# Summary. An optional shortened abstract.
summary:

tags:
  - Computer Vision
  - Robotics
  - Deep Learning
featured: true

links:
#- name: Custom Link
#  url: http://example.org
url_pdf: "papers/High_Dynamic_Range_Modulo_Imaging_for_Robust_Object_Detection_in_Autonomous_Driving.pdf"
url_code: 'https://github.com/kebincontreras/ObjectDetectionModulo'
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
# url_slides: ''
# url_source: '#'
# url_video: '#'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption:
  focal_point: Smart
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
# - internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---




<!-- {{% alert note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /alert %}}

{{% alert note %}}
Click the *Slides* button above to demo academia's Markdown slides feature.
{{% /alert %}} -->

<!-- Supplementary notes can be added here, including [code and math](https://sourcethemes.com/academic/docs/writing-markdown-latex/). -->


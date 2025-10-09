---
title: "Deep Robust Object Detection Under High Illumination Conditions Using Modulo Images"
authors:
  - Luis Toscano-Palomino
  - Kebin Contreras 
  - Brayan Monroy 
  - Jorge Bacca
date: "2025-08-27T00:00:00Z"
doi: "10.1109/STSIVA66383.2025.11156687"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-09-17T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *2025 XXV Symposium of Image, Signal Processing, and Artificial Vision (STSIVA)*
publication_short: In *STSIVA*

abstract: Drone detection under high-illumination conditions remains a critical challenge due to sensor saturation, which degrades visual information and limits the performance of conventional detection models. A promising alternative to overcome this issue is modulo imaging, an approach based on modulo-ADCs that reset pixel intensities upon reaching a predefined saturation threshold, thus avoiding saturation loss. This work presents a methodology based on fine-tuning a detection model using modulo images, allowing accurate object detection without requiring High Dynamic Range (HDR) image reconstruction. Additionally, an optional reconstruction stage using the Autoregressive High-order Finite Difference (AHFD) algorithm is evaluated to recover high-fidelity HDR content. Experimental results show that the fine-tuned model achieves F1-scores above 96% across different illumination levels, outperforming saturated and raw modulo inputs, and approaching the performance of ideal HDR images. These findings demonstrate that fine-tuning with modulo data enables robust drone detection while reducing inference time, making the reconstruction process optional rather than essential.

# Summary. An optional shortened abstract.
summary:

tags:
  - Image Processing
  - Deep Learning
featured: true

links:
#- name: Custom Link
#  url: http://example.org
url_pdf: "papers/Deep_Robust_Object_Detection_Under_High_Illumination_Conditions_Using_Modulo_Images.pdf"
# url_code: '#'
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


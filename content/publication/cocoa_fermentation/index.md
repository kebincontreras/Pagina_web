---
title: "Automated Classification of Cocoa Bean Fermentation Levels Using Computer Vision"
authors:
  - Juan Suarez
  - Juan Espinosa
  - Kebin Contreras
  - Jorge Bacca
date: "2025-11-18T00:00:00Z"
doi: "10.1109/STSIVA66383.2025.11156348"

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

abstract: This study presents an automated system for classifying the fermentation levels of cocoa beans using convolutional neural networks, specifically employing YOLO-based object detection models. RGB images of cocoa beans, which were cut using a guillotine to expose their internal structure, were analyzed and manually labeled by experts according to the NTC 1252:2021 standard. A dataset of 19 high-resolution images, containing approximately 1,850 annotated beans, was used for both training and evaluation. Four versions of YOLOv8 (n, s, m, l) were tested, with YOLOv8m demonstrating the best overall performance, achieving an Intersection over Union (IoU) of 0.6522, accuracy of 0.6817, recall of 0.6558, and an F1-score of 0.6685. Comparative tests with earlier YOLO versions (YOLOv5 to YOLOv7) confirmed YOLOv8m as the most efficient model for this task. In addition, it achieved a competitive inference time of 89.87 ms per image. These results highlight the potential of deep learning and computer vision techniques to automate the classification of cocoa bean fermentation levels, providing a faster, more objective alternative to traditional manual inspection methods.

# Summary. An optional shortened abstract.
summary:

tags:
  - Image Processing
  - Deep Learning
  - Computer Vision
featured: true

links:
#- name: Custom Link
#  url: http://example.org
url_pdf: "papers/Automated_Classification_of_Cocoa_Bean_Fermentation_Levels_Using_Computer_Vision.pdf"
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


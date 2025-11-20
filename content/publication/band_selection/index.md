---
title: "Deep Learning-Based Spectral Band Selection for Spectral Imaging Tasks"
authors:
  - Emmanuel Martinez
  - Kebin Contreras
  - Jorge Bacca
date: "2025-11-07T00:00:00Z"
doi: "10.1364/opticaopen.29374277.v2"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-11-07T00:00:00Z"

weight: 99

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: In *Optica Open | Journal*
publication_short: In *Optica Open*

abstract: Spectral Images (SI) are acquired at multiple wavelengths across the electromagnetic spectrum, providing information that enhances performance in tasks such as material segmentation and classification by resolving ambiguities inherent in RGB images. SI devices are designed to capture a large number of spectral bands, which increases both cost and acquisition time, thereby limiting their practical deployment. However, not all spectral bands contribute equally to task-specific performance. To address this issue, a Deep Spectral Band Selection (DSBS) framework is proposed for spectral imaging tasks. Unlike previous methods that emphasize the preservation of non-task-specific information, DSBS identifies the most informative bands for a given task by jointly training a fully differentiable band selector and a neural network within an end-to-end learning framework. The selection process is guided by a proposed bin function and a custom lp-norm regularization term to achieve the desired number of spectral bands. Experimental results in material segmentation and classification tasks indicate that DSBS outperforms state-of-the-art machine and deep learning methods.

# Summary. An optional shortened abstract.
summary:

tags:
  - Deep Learning
  - Image Processing
featured: true

links:
#- name: Custom Link
#  url: http://example.org
url_pdf: "papers/Deep_Learning-Based_Spectral_Band_Selection_for_Spectral_Imaging_Tasks.pdf"
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


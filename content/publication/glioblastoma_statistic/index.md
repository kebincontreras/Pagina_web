---
title: "Deep Learning for Glioblastoma Multiforme Detection from MRI: A Statistical Analysis for Demographic Bias"
authors:
  - Kebin Contreras
  - Julio Gutierrez-Rengifo 
  - Oscar Casanova-Carvajal 
  - Angel Luis Alvarez 
  - Patricia E Vélez-Varela 
  - Ana Lorena Urbano-Bojorge
date: "2025-06-03T00:00:00Z"
doi: "10.3390/app15116274"

# Schedule page publish date (NOT publication's date).
publishDate: "2025-06-03T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: In *Applied Sciences | Journal*
publication_short: In *Applied Sciences*

abstract: Glioblastoma, IDH-wildtype (GBM), is the most aggressive and complex brain tumour classified by the World Health Organization (WHO), characterised by high mortality rates and diagnostic limitations inherent to invasive conventional procedures. Early detection is essential for improving patient outcomes, underscoring the need for non-invasive diagnostic tools. This study presents a convolutional neural network (CNN) specifically optimised for GBM detection from T1-weighted magnetic resonance imaging (MRI), with systematic evaluations of layer depth, activation functions, and hyperparameters. The model was trained on the RSNA-MICCAI data set and externally validated on the Erasmus Glioma Database (EGD), which includes gliomas of various grades and preserves cranial structures, unlike the skull-stripped RSNA-MICCAI images. This morphological discrepancy demonstrates the generalisation capacity of the model across anatomical and acquisition differences, achieving an F1-score of 0.88. Furthermore, statistical tests, such as Shapiro–Wilk, Mann–Whitney U, and Chi-square, confirmed the absence of demographic bias in model predictions, based on p-values, confidence intervals, and statistical power analyses supporting its demographic fairness. The proposed model achieved an area under the curve–receiver operating characteristic (AUC-ROC) of 0.63 on the RSNA-MICCAI test set, surpassing all prior results submitted to the BraTS 2021 challenge, and establishing a reliable and generalisable approach for non-invasive GBM detection.

# Summary. An optional shortened abstract.
summary:

tags:
  - Biomedical Applications
  - Deep Learning
featured: true

links:
#- name: Custom Link
#  url: http://example.org
url_pdf: "papers/Deep_Learning_for_Glioblastoma_Multiforme_Detection_from_MRI_A_Statistical_Analysis_for_Demographic_Bias.pdf"
url_code: 'https://github.com/kebincontreras/Glioblastoma'
url_dataset: 'https://huggingface.co/datasets/kebincontreras/Glioblastoma_t1w'
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


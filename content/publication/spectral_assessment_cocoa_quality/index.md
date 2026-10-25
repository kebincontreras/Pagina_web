---
title: "Spectral Assessment for Cocoa Quality"
authors:
  - Kebin Contreras
  - Emmanuel Martínez
  - Brayan Monroy
  - Tatiana Gelvez-Barrera
  - Hans Garcia
  - Henry Arguello
  - Jorge Bacca
bibliographic_year: "2024"
publication: "WACCI 2024"
abstract: "This work presents a method combining near-infrared (NIR) spectroscopy with machine learning to assess the quality of Colombian cocoa beans, offering a fast and non-invasive alternative to traditional, subjective, and destructive methods. Cocoa quality is primarily determined by the fermentation level. Therefore, this work adapt different models to enhance the spectral data analysis, promoting sustainable and reliable practices in the Colombian cocoa industry."
summary: "Near-infrared spectroscopy and machine learning for non-invasive assessment of Colombian cocoa bean quality."
url_pdf: "papers/Spectral_Assessment_for_Cocoa_Quality.pdf"
scholar_metadata: true
image:
  caption: "Method overview from the paper."
  focal_point: Smart
  preview_only: false
---

## Method

The work evaluates cocoa fermentation quality using near-infrared spectral data and learning-based models. The poster describes the NTC-1252-2021 assessment context, in which beans are categorized as well-fermented, partially fermented, or slightly-fermented. The proposed workflow uses spectral signatures as input to a deep neural network for fermentation-level prediction.

![Method overview for cocoa quality assessment.](/img/publications/spectral-assessment-cocoa-quality-method.png)

## Results

Using the dataset cited in the paper, Spectralformer obtained the strongest reported results: 97.53% overall accuracy, 98.39% average accuracy, and a Kappa score of 93.28%. The paper reports that this improved overall accuracy by 5.9% over SVM.

## References

1. Sánchez, K., Bacca, J., Arévalo-Sánchez, L., Arguello, H., Castillo, S. (2021). Classification of cocoa beans based on their level of fermentation using spectral information. *TecnoLógicas*, 24(50), 172-188.
2. Martins, J., Guerra, R., Pires, M., Antunes, T., Panagopoulos, A., Brázio, A., Afonso, L., Silva, M., Lucas, M., and Cavaco, A. (2022). Spectranet-53: A deep residual learning architecture for predicting soluble solids content with vis-nir spectroscopy. *Computers and Electronics in Agriculture*, 197, 106945.
3. Hong, D., Han, Z., Yao, J., Gao, L., Zhang, B., Plaza, A., and Chanussot, J. (2021). Spectralformer: Rethinking hyperspectral image classification with transformers. *IEEE Transactions on Geoscience and Remote Sensing*, 60, 1-15.

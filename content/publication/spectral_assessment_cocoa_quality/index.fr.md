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

## Méthode

Ce travail évalue la qualité de fermentation du cacao à partir de données spectrales dans le proche infrarouge et de modèles d'apprentissage. Le poster présente le contexte d'évaluation NTC-1252-2021, où les fèves sont classées comme bien fermentées, partiellement fermentées ou légèrement fermentées. Le flux proposé utilise les signatures spectrales comme entrée d'un réseau neuronal profond pour prédire le niveau de fermentation.

![Method overview for cocoa quality assessment.](/img/publications/spectral-assessment-cocoa-quality-method.png)

## Résultats

Avec le jeu de données cité dans l'article, Spectralformer a obtenu les meilleurs résultats rapportés : 97.53 % de précision globale, 98.39 % de précision moyenne et un score Kappa de 93.28 %. L'article rapporte une amélioration de 5.9 % de la précision globale par rapport à SVM.

## Références

1. Sánchez, K., Bacca, J., Arévalo-Sánchez, L., Arguello, H., Castillo, S. (2021). Classification of cocoa beans based on their level of fermentation using spectral information. *TecnoLógicas*, 24(50), 172-188.
2. Martins, J., Guerra, R., Pires, M., Antunes, T., Panagopoulos, A., Brázio, A., Afonso, L., Silva, M., Lucas, M., and Cavaco, A. (2022). Spectranet-53: A deep residual learning architecture for predicting soluble solids content with vis-nir spectroscopy. *Computers and Electronics in Agriculture*, 197, 106945.
3. Hong, D., Han, Z., Yao, J., Gao, L., Zhang, B., Plaza, A., and Chanussot, J. (2021). Spectralformer: Rethinking hyperspectral image classification with transformers. *IEEE Transactions on Geoscience and Remote Sensing*, 60, 1-15.

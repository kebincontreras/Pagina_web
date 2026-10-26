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

## Método

El trabajo evalúa la calidad de fermentación del cacao usando datos espectrales de infrarrojo cercano y modelos basados en aprendizaje. El póster describe el contexto de evaluación NTC-1252-2021, en el que los granos se clasifican como bien fermentados, parcialmente fermentados o ligeramente fermentados. El flujo propuesto usa firmas espectrales como entrada de una red neuronal profunda para predecir el nivel de fermentación.

![Method overview for cocoa quality assessment.](/img/publications/spectral-assessment-cocoa-quality-method.png)

## Resultados

Con el conjunto de datos citado en el artículo, Spectralformer obtuvo los mejores resultados reportados: 97.53% de exactitud global, 98.39% de exactitud media y un puntaje Kappa de 93.28%. El artículo informa una mejora de 5.9% en exactitud global frente a SVM.

## Referencias

1. Sánchez, K., Bacca, J., Arévalo-Sánchez, L., Arguello, H., Castillo, S. (2021). Classification of cocoa beans based on their level of fermentation using spectral information. *TecnoLógicas*, 24(50), 172-188.
2. Martins, J., Guerra, R., Pires, M., Antunes, T., Panagopoulos, A., Brázio, A., Afonso, L., Silva, M., Lucas, M., and Cavaco, A. (2022). Spectranet-53: A deep residual learning architecture for predicting soluble solids content with vis-nir spectroscopy. *Computers and Electronics in Agriculture*, 197, 106945.
3. Hong, D., Han, Z., Yao, J., Gao, L., Zhang, B., Plaza, A., and Chanussot, J. (2021). Spectralformer: Rethinking hyperspectral image classification with transformers. *IEEE Transactions on Geoscience and Remote Sensing*, 60, 1-15.

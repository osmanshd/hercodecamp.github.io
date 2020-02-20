---
layout: page
images:
  - image_path: /photos/2019-09-15(172) HerCodeCamp_JT.JPG
    title: 2019-09-15(172)
  - image_path: /photos/2019-09-15(156) HerCodeCamp_JT.JPG
    title: 2019-09-15(156)
  - image_path: /photos/2019-09-15(169) HerCodeCamp_JT.JPG
    title: 2019-09-15(169)
  - image_path: /photos/2019-09-15(151) HerCodeCamp_JT.JPG
    title: 2019-09-15(151)
  - image_path: /photos/2019-09-15(152) HerCodeCamp_JT.JPG
    title: 2019-09-15(152)
  - image_path: /photos/2019-09-15(145) HerCodeCamp_JT.JPG
    title: 2019-09-15(145)
  - image_path: /photos/2019-09-15(148) HerCodeCamp_JT.JPG
    title: 2019-09-15(148)
---

<ul>
  {% for image in page.images %}
  <li>
    <img src="{{ image.image_path }}" alt="{{ image.title }}">
  </li>
  {% endfor %}
</ul>

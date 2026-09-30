---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<div class="profile-intro" markdown="1">
<p class="profile-eyebrow">FUDAN UNIVERSITY &middot; EMBODIED AI</p>
<h1 class="profile-heading">Shengqi Xu <span class="profile-name-cn">&#35768;&#26207;&#26071;</span></h1>

I am a second-year Ph.D. student at the [Fudan Vision and Learning Laboratory](https://fvl.fudan.edu.cn/main.htm), Fudan University, advised by [Prof. Zuxuan Wu](https://zxwu.azurewebsites.net/). My research focuses on **embodied AI and tactile-driven manipulation**.

Previously, I received my master's degree from Huazhong University of Science and Technology, supervised by [Prof. Luxin Yan](http://faculty.hust.edu.cn/yanluxin/zh_CN/lwcg/1374876/content/105157.htm). I was also fortunate to be mentored by [Prof. Wangmeng Zuo](https://homepage.hit.edu.cn/wangmengzuo). My earlier research focused on imaging through atmospheric turbulence.

<div class="research-topics"><span>Embodied AI</span><span>Tactile Manipulation</span></div>
</div>

# News

<div class="news-list" markdown="1">

- *2026.09* Our work [ThinkingVLA](https://fitz135.github.io/thinkingvla.github.io/) for Interleaved Chain-of-Thought VLA has been accepted by <strong><i>CoRL'26</i></strong>!
- *2026.07* We introduce [𝒩<sub>0</sub>-Foundation](https://research.neoteai.com/n0-foundation/), a tactile-centric foundation for embodied manipulation spanning infrastructure, data, representation learning, and benchmarks.
- *2026.07* We introduce [𝒩<sub>0</sub>-VTLA](https://research.neoteai.com/n0-vtla/), a vision-tactile-language-action foundation model with latent tactile tokens.
- *2026.07* We introduce [𝒩<sub>0</sub>-TWAM](https://research.neoteai.com/n0-twam/), a tactile-native world-action model for contact-rich manipulation.
- *2026.06* Our work [ViTacMotor](https://shengqi77.github.io/Seeing-Touch-from-Motion/) for Visuo-Tactile Manipulation with Tactile Motion Correlation has been accepted by <strong><i>ECCV'26</i></strong>!
- *2026.01* Our work [PreferThinker](https://3038543815.github.io/preferthinker.github.io/) for reasoning-based personalized image preference assessment has been accepted by <strong><i>ICLR'26</i></strong>!
- *2024.07* Our work [CDSP](https://shengqi77.github.io/RLR-AT.github.io/) for long-range turbulence mitigation with a large-scale benchmark has been accepted by <strong><i>ECCV'24</i></strong>!
- *2024.06* We have won <strong><i>1st place</i></strong> in the track 'Atmospheric Turbulence Mitigation' in the <strong><i>CVPR'24 7th UG2+ Challenge</i></strong>!
- *2023.06* We have won <strong><i>1st place</i></strong> in the track 'Atmospheric Turbulence Mitigation' in the <strong><i>CVPR'23 6th UG2+ Challenge</i></strong>!

</div>

<span class='anchor' id='publications'></span>

# Publications

<p class="section-lead"><sup>*</sup> Corresponding author.</p>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CoRL &middot; 2026</div><img src='images/thinkingvla.png' alt="ThinkingVLA: interleaved vision and language reasoning for robotic manipulation" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[ThinkingVLA: Interleaved Vision and Language Reasoning for Robotic Manipulation](https://arxiv.org/pdf/2606.17937)

Tianyi Lu, Hui Zhang, Zijie Diao, Junke Wang, <strong class="author-self">Shengqi Xu</strong>, Xingyao Lin, Guojin Zhong, Ziyi Ye, Peng Wang, Zuxuan Wu, Yu-Gang Jiang

<p class="paper-links"><a href="https://arxiv.org/pdf/2606.17937">arXiv</a><a href="https://fitz135.github.io/thinkingvla.github.io/">Project</a></p>

  <p class="paper-venue"><i>Conference on Robot Learning (<strong>CoRL</strong>), 2026.</i></p>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV · 2026</div><img src='images/ECCV 2026.png' alt="Seeing Touch from Motion paper" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Seeing Touch from Motion: A Unified Modality-Aware Visuo-Tactile Policy with Tactile Motion Correlation](https://arxiv.org/pdf/2606.29941)

<strong class="author-self">Shengqi Xu</strong>, Guojin Zhong, Yang Liu, Fanjie Wang, Hu Luo, Hanyu Zhou, Weiyao Zhang, Ziyi Ye, Zuxuan Wu<sup>*</sup>, Yu-Gang Jiang<sup>*</sup>

<p class="paper-links"><a href="https://arxiv.org/pdf/2606.29941">arXiv</a><a href="https://shengqi77.github.io/Seeing-Touch-from-Motion/">Project</a><a href="https://github.com/Shengqi77/ViTacMotor">Code</a><strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong></p>

  <p class="paper-venue"><i>European Conference on Computer Vision (<strong> ECCV </strong>), 2026.</i></p>

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR · 2026</div><img src='images/Preferthinker.png' alt="PreferThinker paper" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[PreferThinker: Reasoning-based Personalized Image Preference Assessment](https://arxiv.org/pdf/2511.00609)

<strong class="author-self">Shengqi Xu</strong>, Xinpeng Zhou, Yabo Zhang, Ming Liu<sup>*</sup>, Tao Liang, Tianyu Zhang, Yalong Bai, Zuxuan Wu, Wangmeng Zuo

<p class="paper-links"><a href="https://arxiv.org/pdf/2511.00609">arXiv</a><a href="https://3038543815.github.io/preferthinker.github.io/">Project</a><a href="https://shengqi77.github.io/">Dataset</a><a href="https://github.com/Shengqi77/PreferThinker">Code</a><strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong></p>

  <p class="paper-venue"><i>International Conference on Learning Representations (<strong> ICLR </strong>), 2026.</i></p>

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV · 2024</div><img src='images/2024ECCV.gif' alt="Long-range Turbulence Mitigation paper" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Long-range Turbulence Mitigation: A Large-scale Dataset and A Coarse-to-fine Framework](https://arxiv.org/pdf/2407.08377)

<strong class="author-self">Shengqi Xu</strong>, Run Sun, Yi Chang<sup>*</sup>, Shuning Cao, Xueyao Xiao, Luxin Yan

<p class="paper-links"><a href="https://arxiv.org/pdf/2407.08377">arXiv</a><a href="https://shengqi77.github.io/RLR-AT.github.io/">Project</a><a href="https://drive.google.com/file/d/14z0CvHcEVhkxWu5U7nq64xmB8Apqnx54/view">Dataset</a><a href="https://github.com/Shengqi77/Long-range-Turbulence-Mitigation">Code</a><strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong></p>

  <p class="paper-venue"><i>European Conference on Computer Vision (<strong> ECCV </strong>), 2024.</i></p>
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPRW UG2+ · 2023</div><img src='images/2023Text.gif' alt="CVPR 2023 UG2+ text recognition solution" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[1st Solution Places for CVPR 2023 UG2+ Challenge Track 2.1-
Text Recognition through Atmospheric Turbulence](https://arxiv.org/pdf/2306.08963)

<strong class="author-self">Shengqi Xu</strong>, Xueyao Xiao, Shuning Cao, Yi Chang<sup>*</sup>, Luxin Yan

<p class="paper-links"><a href="https://arxiv.org/pdf/2306.08963">arXiv</a><a href="https://github.com/Shengqi77/UG2_Turbulence_Mitigation">Code</a><strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong></p>

<p class="paper-venue"><i>6th  CVPRW UG2+ Challenge,  2023.</i></p>
<strong><span class="award-highlight">First Place</span> in the Track of Text Recognition through Turbulence</strong>
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPRW UG2+ · 2023</div><img src='images/2023Target.gif' alt="CVPR 2023 UG2+ coded target restoration solution" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[1st Solution Places for CVPR 2023 UG2+ Challenge Track 2.2-Coded Target Restoration through Atmospheric Turbulence](https://arxiv.org/pdf/2306.09379)

<strong class="author-self">Shengqi Xu</strong>, Shuning Cao, Haoyue Liu, Xueyao Xiao, Yi Chang<sup>*</sup>, Luxin Yan

<p class="paper-links"><a href="https://arxiv.org/pdf/2306.09379">arXiv</a><a href="https://github.com/Shengqi77/UG2_Turbulence_Mitigation">Code</a><strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong></p>

<p class="paper-venue"><i>6th  CVPRW UG2+ Challenge, 2023.</i></p>
<strong><span class="award-highlight">First Place</span> in the Track of Code Recognition through Turbulence </strong>
</div>
</div>


<span class='anchor' id='technical-reports'></span>

# Technical Reports

<div class='paper-box paper-box--report'><div class='paper-box-image'><div><div class="badge">Technical Report · 2026</div><img src='images/n0-foundation.png' alt="N0-Foundation technical report" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[𝒩<sub>0</sub>-Foundation: Towards the Age of Tactile Intelligence](https://research.neoteai.com/assets/n0-foundation-report.pdf)

<strong>  NeoteAI Team and Fudan TEAI Team </strong>

<p class="paper-links"><a href="https://research.neoteai.com/assets/n0-foundation-report.pdf">Paper</a><a href="https://research.neoteai.com/n0-foundation/">Project</a><a href="https://huggingface.co/datasets/NeoteAIEmbodied/OpenNeoData">Dataset</a><a href="https://github.com/neoteai/N0-Foundation">Code</a><strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong></p>

  <p class="paper-venue"><i> <strong> Technical Report </strong>, 2026.</i></p>

</div>
</div>

<div class='paper-box paper-box--report'><div class='paper-box-image'><div><div class="badge">Technical Report · 2026</div><img src='images/n0-vtla.png' alt="N0-VTLA technical report" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[𝒩<sub>0</sub>-VTLA:  Scaling Vision-Tactile-Language-Action Model with Latent Tactile Tokens](https://research.neoteai.com/assets/n0-vtla-report.pdf)

<strong>  NeoteAI Team and Fudan TEAI Team </strong>

<p class="paper-links"><a href="https://research.neoteai.com/assets/n0-vtla-report.pdf">Paper</a><a href="https://research.neoteai.com/n0-vtla/">Project</a><a href="https://github.com/neoteai/N0-VTLA">Code</a><strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong></p>

  <p class="paper-venue"><i><strong> Technical Report </strong>, 2026.</i></p>

</div>
</div>

<div class='paper-box paper-box--report'><div class='paper-box-image'><div><div class="badge">Technical Report · 2026</div><img src='images/n0-twam.png' alt="N0-TWAM technical report" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[𝒩<sub>0</sub>−TWAM: Scaling Tactile-Native World Action Model for Contact-Rich Manipulation](https://research.neoteai.com/assets/n0-twam-report.pdf)

<strong>  NeoteAI Team and Fudan TEAI Team </strong>

<p class="paper-links"><a href="https://research.neoteai.com/assets/n0-twam-report.pdf">Paper</a><a href="https://research.neoteai.com/n0-twam/">Project</a><a href="https://github.com/neoteai/N0-TWAM">Code</a><strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong></p>

  <p class="paper-venue"><i><strong> Technical Report </strong>, 2026.</i></p>

</div>
</div>


# Honors and Awards
- *2025.04* <strong><span class="award-highlight">Outstanding Graduates</span> of HUST</strong>.
- *2024.10* <strong><span class="award-highlight">National Scholarship</span> (Highest Honor: Top 2% Nationwide)</strong>.
- *2024.06* <strong><span class="award-highlight">First Place</span> of the track 'Atmospheric Turbulence Mitigation' in the CVPR 2024 UG2+ Challenge</strong>.
- *2023.06* <strong> <span class="award-highlight">First Place</span> of the track 'Atmospheric Turbulence Mitigation' in the CVPR 2023 UG2+ Challenge</strong>.
- *2023.10* <strong> <span class="award-highlight">Outstanding Student Paper Award</span>  at the 6th Conference on Atmospheric and Adaptive Optics</strong>.
- *2020.04*  <strong><span class="award-highlight">First Prize</span> of the Asia and Pacific Mathematical Contest in Modeling</strong>.
- *2020.04*  <strong><span class="award-highlight">First Prize</span> of Chinese Mathematics Competition</strong>.

# Education
- *2025.09 - Now*,  
Fudan University, China.
Ph.D. Candidate
- *2022.09 - 2025.06*,  
Huazhong University of Science and Technology, China.  
Master of Engineering
- *2018.09 - 2022.06*,  
Zhengzhou University, China.  
Bachelor of Engineering  
Ranking: 4/88


# Professional Service

### Journal Reviewer

- [IEEE Transactions on Computational Imaging (TCI)](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6745852)
- [IEEE Transactions on Circuits and Systems for Video Technology (T-CSVT)](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=76)

### Conference Reviewer

- CVPR 24
- ECCV 24
- ACMMM 24

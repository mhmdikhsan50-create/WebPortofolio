// ========================================================
// LOGIKA FILTER PORTFOLIO INTERAKTIF & AKTIVASI NAVBAR
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
    const tabItems = document.querySelectorAll(".tab-item");
    const portfolioBoxes = document.querySelectorAll(".portfolio-box");
    const navLinks = document.querySelectorAll(".nav-links a");

    // 1. FUNGSI FILTER KARTU PORTFOLIO
    tabItems.forEach(tab => {
        tab.addEventListener("click", () => {
            // Hapus kelas aktif dari tab sebelumnya dan pasang ke yang diklik
            document.querySelector(".tab-item.active").classList.remove("active");
            tab.classList.add("active");

            // Ambil nama kategori tujuan filter
            const targetFilter = tab.textContent.trim().toUpperCase();

            portfolioBoxes.forEach(box => {
                const cardBadge = box.querySelector(".card-badge").textContent.trim().toUpperCase();
                
                if (targetFilter === "ALL" || cardBadge === targetFilter) {
                    // Tampilkan kartu kembali dengan transisi scale
                    box.style.display = "flex";
                    setTimeout(() => {
                        box.style.opacity = "1";
                        box.style.transform = "scale(1)";
                    }, 50);
                } else {
                    // Sembunyikan kartu dengan animasi mengecil
                    box.style.opacity = "0";
                    box.style.transform = "scale(0.9)";
                    setTimeout(() => {
                        box.style.display = "none";
                    }, 400);
                }
            });
        });
    });

    // 2. HIGHLIGHT KATEGORI NAVIGASI MENURUT SCROLL LAYAR
    window.addEventListener("scroll", () => {
        let currentSection = "";
        const sections = document.querySelectorAll("section");
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });
});
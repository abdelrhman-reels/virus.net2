const MENU = typeof MENU_ITEMS !== "undefined" && Array.isArray(MENU_ITEMS) ? MENU_ITEMS : [];
const LANG_KEY = "virus_lang";
const PLACEHOLDER_IMAGE = "https://via.placeholder.com/900x600/1d2330/e8edf6?text=VIRus.net";
const CATEGORY_ORDER = ["waffles", "hot", "soft", "energy", "water", "fresh", "addons"];

const TEXT = {
  ar: {
    "brand.subtitle": "كافيه تقني فاخر",
    "nav.home": "الرئيسية",
    "nav.menu": "المنيو",
    "nav.specs": "الأجهزة",
    "nav.branches": "الفروع",
    "nav.contact": "التواصل",
    "hero.eyebrow": "Modern Lounge Experience",
    "hero.title": "VIRus.net - كافيه ألعاب بطابع راقٍ",
    "hero.subtitle": "مكان هادئ للألعاب والمشروبات مع تجربة حديثة بدون أي طلب أونلاين.",
    "hero.cta": "استعرض المنيو",
    "packages.title": "باقات الأسعار - PC / PlayStation",
    "packages.pc": "PC",
    "packages.pc_1h": "PC: ساعة",
    "packages.ps": "PlayStation",
    "packages.ps4_single": "PS4: ساعة (فردي)",
    "packages.ps4_multi": "PS4:   ساعة (زوجي)",
    "packages.ps5_single": "PS5: ساعة (فردي)",
    "packages.ps5_multi": "PS5: ساعة (زوجي)",
    "offers.title": "العروض",
    "offers.item1": "عرض اليوم الواحد: 7 ساعات",
    "offers.item2": "عرض 20 ساعة (صالح طوال الشهر)",
    "menu.title": "المنيو",
    "menu.subtitle": "عرض كامل للأصناف مع التفاصيل فقط.",
    "menu.searchPlaceholder": "ابحث بالاسم...",
    "menu.details": "التفاصيل",
    "menu.empty": "لا توجد عناصر مطابقة.",
    "specs.title": "Specs / الأجهزة",
    "specs.subtitle": "تفاصيل الأجهزة داخل الفرع",
    "specs.pc_title": "PCs",
    "specs.pc_count": "26 Gaming PCs",
    "specs.gpu": "GPU: RTX 4060",
    "specs.cpu": "CPU: Intel i5 12th Gen",
    "specs.ram": "RAM: 16-32GB",
    "specs.ps_title": "PlayStation",
    "specs.ps_total": "6 total",
    "specs.ps4": "3 PS4",
    "specs.ps5": "3 PS5",
    "branches.title": "الفروع",
    "branches.subtitle": "اضغط لفتح موقع الفرع مباشرة.",
    "branches.open": "Open Location",
    "contact.title": "التواصل",
    "contact.subtitle": "واتساب وفيسبوك فقط",
    "contact.whatsapp1": "WhatsApp 1",
    "contact.whatsapp2": "WhatsApp 2",
    "contact.facebook": "Facebook",
    "contact.admin": "فتح أداة الإدارة",
    "footer.text": "VIRus.net - جميع الأسعار بالجنيه المصري",
    "modal.price": "السعر",
    "modal.flavors": "النكهات المتاحة",
    "modal.addons": "إضافات اختيارية",
    "modal.note": "للعرض فقط - لا يوجد طلب أونلاين.",
    "categories.all": "الكل",
    "categories.waffles": "وافل",
    "categories.hot": "مشروبات ساخنة",
    "categories.soft": "مشروبات غازية",
    "categories.energy": "مشروبات طاقة",
    "categories.water": "مياه",
    "categories.fresh": "عصائر فريش",
    "categories.addons": "إضافات"
  },
  en: {
    "brand.subtitle": "Premium Tech Cafe",
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.specs": "Specs",
    "nav.branches": "Branches",
    "nav.contact": "Contact",
    "hero.eyebrow": "Modern Lounge Experience",
    "hero.title": "VIRus.net - Premium Tech Cafe",
    "hero.subtitle": "A calm gaming lounge with premium drinks and waffle menu, display-only and offline-friendly.",
    "hero.cta": "Explore Menu",
    "packages.title": "Pricing Packages - PC / PlayStation",
    "packages.pc": "PC",
    "packages.pc_1h": "PC: hour",
    "packages.ps": "PlayStation",
    "packages.ps4_single": "PS4: hour (Single)",
    "packages.ps4_multi": "PS4:  hour (Multi)",
    "packages.ps5_single": "PS5: hour (Single)",
    "packages.ps5_multi": "PS5:  hour (Multi)",
    "offers.title": "Offers",
    "offers.item1": "Single Station Offer: 7 Hours ",
    "offers.item2": "20 Hours  (Valid All Month)",
    "menu.title": "Menu",
    "menu.subtitle": "Full menu display with details only.",
    "menu.searchPlaceholder": "Search by item name...",
    "menu.details": "Details",
    "menu.empty": "No matching items.",
    "specs.title": "Specs / Devices",
    "specs.subtitle": "Venue setup and hardware details",
    "specs.pc_title": "PCs",
    "specs.pc_count": "26 Gaming PCs",
    "specs.gpu": "GPU: RTX 4060",
    "specs.cpu": "CPU: Intel i5 12th Gen",
    "specs.ram": "RAM: 16-32GB",
    "specs.ps_title": "PlayStation",
    "specs.ps_total": "6 total",
    "specs.ps4": "3 PS4",
    "specs.ps5": "3 PS5",
    "branches.title": "Branches",
    "branches.subtitle": "Choose a branch and open location directly.",
    "branches.open": "Open Location",
    "contact.title": "Contact",
    "contact.subtitle": "WhatsApp and Facebook only",
    "contact.whatsapp1": "WhatsApp 1",
    "contact.whatsapp2": "WhatsApp 2",
    "contact.facebook": "Facebook",
    "contact.admin": "Open Admin Tool",
    "footer.text": "VIRus.net - All prices are in EGP",
    "modal.price": "Price",
    "modal.flavors": "Flavor options",
    "modal.addons": "Optional add-ons",
    "modal.note": "Display only - no online ordering.",
    "categories.all": "All",
    "categories.waffles": "Waffles",
    "categories.hot": "Hot Drinks",
    "categories.soft": "Soft Drinks",
    "categories.energy": "Energy Drinks",
    "categories.water": "Water",
    "categories.fresh": "Fresh Juices",
    "categories.addons": "Add-ons"
  }
};

const state = {
  lang: "ar",
  category: "all"
};

const refs = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  refs.searchInput = document.getElementById("menuSearch");
  refs.menuGrid = document.getElementById("menuGrid");
  refs.categoryFilters = document.getElementById("categoryFilters");
  refs.modal = document.getElementById("detailsModal");
  refs.modalContent = document.getElementById("modalContent");
  refs.modalClose = document.getElementById("modalClose");
  refs.mainNav = document.getElementById("mainNav");
  refs.menuToggle = document.getElementById("menuToggle");
  refs.navLinks = Array.from(document.querySelectorAll(".nav-link"));
  refs.sections = Array.from(document.querySelectorAll("main section[id]"));
  refs.langButtons = Array.from(document.querySelectorAll(".lang-btn"));

  const saved = localStorage.getItem(LANG_KEY);
  if (saved === "ar" || saved === "en") {
    state.lang = saved;
  }

  bindEvents();
  setLanguage(state.lang, false);
  updateActiveNav();
}

function bindEvents() {
  refs.searchInput.addEventListener("input", renderMenu);

  refs.categoryFilters.addEventListener("click", (event) => {
    const chip = event.target.closest(".chip");
    if (!chip) {
      return;
    }
    state.category = chip.dataset.category;
    renderCategoryFilters();
    renderMenu();
  });

  refs.menuGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-details-id]");
    if (!button) {
      return;
    }
    openDetailsById(button.dataset.detailsId);
  });

  refs.modal.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-close-modal")) {
      closeModal();
    }
  });

  refs.modalClose.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && refs.modal.classList.contains("open")) {
      closeModal();
    }
  });

  refs.menuToggle.addEventListener("click", () => {
    refs.mainNav.classList.toggle("open");
  });

  refs.navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      refs.mainNav.classList.remove("open");
    });
  });

  refs.langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang, true);
    });
  });

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
      refs.mainNav.classList.remove("open");
    }
  });
}

function setLanguage(lang, persist) {
  state.lang = lang === "en" ? "en" : "ar";
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";

  if (persist) {
    localStorage.setItem(LANG_KEY, state.lang);
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });

  refs.langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });

  renderCategoryFilters();
  renderMenu();
}

function renderCategoryFilters() {
  const categories = ["all"].concat(CATEGORY_ORDER);
  refs.categoryFilters.innerHTML = categories
    .map((category) => {
      const activeClass = state.category === category ? "active" : "";
      return `<button class="chip ${activeClass}" type="button" data-category="${category}">${escapeHtml(
        categoryLabel(category)
      )}</button>`;
    })
    .join("");
}

function renderMenu() {
  const search = refs.searchInput.value.trim().toLowerCase();
  const filtered = MENU.filter((item) => {
    const matchCategory = state.category === "all" || item.category === state.category;
    if (!matchCategory) {
      return false;
    }
    const name = getLocalizedName(item).toLowerCase();
    return name.includes(search);
  });

  if (!filtered.length) {
    refs.menuGrid.innerHTML = `<div class="empty-state glass">${escapeHtml(t("menu.empty"))}</div>`;
    return;
  }

  refs.menuGrid.innerHTML = filtered
    .map((item) => {
      const name = getLocalizedName(item);
      const desc = getLocalizedDesc(item);
      return `
        <article class="menu-card glass">
          <div class="card-media">
            <img src="${escapeHtml(item.image)}" alt="${escapeHtml(name)}" loading="lazy">
          </div>
          <div class="card-body">
            <span class="category-tag">${escapeHtml(categoryLabel(item.category))}</span>
            <h3>${escapeHtml(name)}</h3>
            <p>${escapeHtml(desc)}</p>
            <div class="card-foot">
              <strong>${escapeHtml(formatPrice(item.price))}</strong>
              <button type="button" class="btn-ghost" data-details-id="${escapeHtml(
                String(item.id)
              )}">${escapeHtml(t("menu.details"))}</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  refs.menuGrid.querySelectorAll("img").forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        img.src = PLACEHOLDER_IMAGE;
      },
      { once: true }
    );
  });
}

function openDetailsById(id) {
  const item = MENU.find((entry) => String(entry.id) === String(id));
  if (!item) {
    return;
  }

  const flavors = resolveFlavors(item);
  const addOns = resolveAddOns(item);
  const name = getLocalizedName(item);
  const desc = getLocalizedDesc(item);

  const flavorBlock =
    flavors.length > 0
      ? `
      <section class="option-block">
        <h4>${escapeHtml(t("modal.flavors"))}</h4>
        <ul class="option-list">
          ${flavors
            .map((flavor) => `<li><span>${escapeHtml(localizedOptionName(flavor))}</span></li>`)
            .join("")}
        </ul>
      </section>
    `
      : "";

  const addOnBlock =
    addOns.length > 0
      ? `
      <section class="option-block">
        <h4>${escapeHtml(t("modal.addons"))}</h4>
        <ul class="option-list">
          ${addOns
            .map(
              (addon) => `
            <li>
              <span>${escapeHtml(localizedOptionName(addon))}</span>
              <strong>+${escapeHtml(String(Number(addon.price || 0)))} EGP</strong>
            </li>
          `
            )
            .join("")}
        </ul>
      </section>
    `
      : "";

  refs.modalContent.innerHTML = `
    <div class="modal-layout">
      <div class="modal-image">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(name)}" loading="lazy">
      </div>
      <div class="modal-meta">
        <span class="category-tag">${escapeHtml(categoryLabel(item.category))}</span>
        <h3>${escapeHtml(name)}</h3>
        <p>${escapeHtml(desc)}</p>
        <p class="modal-price">
          <span>${escapeHtml(t("modal.price"))}:</span>
          <strong>${escapeHtml(formatPrice(item.price))}</strong>
        </p>
        ${flavorBlock}
        ${addOnBlock}
        <p class="modal-note">${escapeHtml(t("modal.note"))}</p>
      </div>
    </div>
  `;

  const image = refs.modalContent.querySelector("img");
  if (image) {
    image.addEventListener(
      "error",
      () => {
        image.src = PLACEHOLDER_IMAGE;
      },
      { once: true }
    );
  }

  refs.modal.classList.add("open");
  refs.modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  refs.modal.classList.remove("open");
  refs.modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function resolveFlavors(item) {
  if (!Array.isArray(item.options)) {
    return [];
  }

  return item.options
    .map((entry) => {
      if (typeof entry === "string") {
        return { name_ar: entry, name_en: entry };
      }
      if (entry && typeof entry === "object") {
        const nameAr = String(entry.name_ar || entry.name_en || "").trim();
        const nameEn = String(entry.name_en || entry.name_ar || "").trim();
        if (!nameAr && !nameEn) {
          return null;
        }
        return { name_ar: nameAr, name_en: nameEn };
      }
      return null;
    })
    .filter(Boolean);
}

function resolveAddOns(item) {
  let refsList = Array.isArray(item.addOns) ? item.addOns.slice() : [];

  if (item.category === "waffles" && refsList.length === 0) {
    refsList = ["berry-spread", "strawberry-spread", "extra-milk-100ml"];
  }
  if (item.category === "hot" && refsList.length === 0) {
    refsList = ["extra-milk-100ml"];
  }

  const resolved = refsList
    .map((entry) => {
      if (typeof entry === "string") {
        const addon = MENU.find(
          (menuItem) =>
            menuItem.category === "addons" &&
            (String(menuItem.id) === entry ||
              String(menuItem.name_en || "")
                .toLowerCase()
                .replace(/\s+/g, "-") ===
                entry.toLowerCase())
        );
        if (!addon) {
          return null;
        }
        return {
          id: addon.id,
          name_ar: addon.name_ar,
          name_en: addon.name_en,
          price: addon.price
        };
      }

      if (entry && typeof entry === "object") {
        return {
          id: entry.id || "",
          name_ar: String(entry.name_ar || entry.name_en || ""),
          name_en: String(entry.name_en || entry.name_ar || ""),
          price: Number(entry.price || 0)
        };
      }

      return null;
    })
    .filter(Boolean);

  const seen = new Set();
  return resolved.filter((addon) => {
    const key = String(addon.id || addon.name_en || addon.name_ar);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function updateActiveNav() {
  const marker = window.scrollY + 180;
  let activeSection = "home";

  refs.sections.forEach((section) => {
    if (marker >= section.offsetTop) {
      activeSection = section.id;
    }
  });

  refs.navLinks.forEach((link) => {
    const target = link.getAttribute("href").slice(1);
    link.classList.toggle("active", target === activeSection);
  });
}

function categoryLabel(category) {
  return t(`categories.${category}`) || category;
}

function formatPrice(price) {
  const value = Number(price);
  const clean = Number.isFinite(value) ? value : 0;
  return state.lang === "ar" ? `${clean} ج.م` : `${clean} EGP`;
}

function getLocalizedName(item) {
  return state.lang === "ar" ? String(item.name_ar || item.name_en || "") : String(item.name_en || item.name_ar || "");
}

function getLocalizedDesc(item) {
  return state.lang === "ar" ? String(item.desc_ar || item.desc_en || "") : String(item.desc_en || item.desc_ar || "");
}

function localizedOptionName(option) {
  return state.lang === "ar"
    ? String(option.name_ar || option.name_en || "")
    : String(option.name_en || option.name_ar || "");
}

function t(key) {
  return TEXT[state.lang][key] || key;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    if (char === "&") return "&amp;";
    if (char === "<") return "&lt;";
    if (char === ">") return "&gt;";
    if (char === '"') return "&quot;";
    return "&#39;";
  });
}

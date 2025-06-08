# 🎨 Primary Text for Buttons (Blue with Orange Hover)

If your button has a blue background (`#00AEEF`) and hovers orange (`#FF6B00`), the text color inside the button should offer **strong contrast** for readability in both **light** and **dark mode**.

---

## ✅ Recommended Text Color for Button Labels

| Button State       | Background Color     | Text Color       | Why?                                |
|--------------------|----------------------|------------------|-------------------------------------|
| **Normal**         | `#00AEEF` (blue)     | `#FFFFFF` (white)| High contrast, readable             |
| **Hovered**        | `#FF6B00` (orange)   | `#FFFFFF` (white)| Still readable on vibrant color     |
| **Disabled (light)**| `#D1D5DB` (gray-300)| `#6B7280` (gray-500)| Muted but visible                |
| **Disabled (dark)**| `#374151` (gray-700) | `#9CA3AF` (gray-400)| Subtle, still visible             |

---

## ❌ Not Recommended

Avoid using **charcoal/navy text** (`#1F2937`) on colored buttons — it can lead to **low contrast**, especially when hovering on orange.

---

## ✅ Light vs Dark Mode Text Summary

| Context                      | Use White Text? | Use Charcoal/Navy? |
|------------------------------|------------------|---------------------|
| Button on solid blue/orange | ✅ Yes           | ❌ No (too low contrast) |
| Button with light gray bg    | ❌ No            | ✅ Yes               |
| General text on page         | ❌ No (on dark bg)| ✅ Yes (on light bg) |


## ✅ So Final Answer:
No, don’t use charcoal/navy text on colored buttons. Use white (#FFFFFF) for text on buttons with blue/orange backgrounds — it will look better and be far more accessible.
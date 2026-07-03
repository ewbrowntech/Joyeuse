import { defaultWindowIcon } from "@tauri-apps/api/app";
import { Menu } from "@tauri-apps/api/menu";
import { TrayIcon } from "@tauri-apps/api/tray";

async function createTrayIcon() {
  const icon = await defaultWindowIcon();
  if (!icon) {
    throw new Error(
      "No default window icon configured. Add icons to src-tauri/icons in tauri.conf.json.",
    );
  }

  // On Linux, libappindicator often hides the icon unless a menu is attached.
  const menu = await Menu.new({ items: [] });

  return TrayIcon.new({
    icon,
    menu,
    tooltip: "joyeuse",
  });
}

export const trayIcon = await createTrayIcon().catch((error) => {
  console.error("Failed to create system tray icon:", error);
  throw error;
});

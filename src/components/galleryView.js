export async function createGalleryView() {
    const container = document.createElement("section");
    container.className = "gallery-view";

    const title = document.createElement("h1");
    title.textContent = "Gallery";
    container.appendChild(title);

    try {
        const response = await fetch("/galleries.json");
        const data = await response.json();

        // Create album tabs
        const tabContainer = document.createElement("div");
        tabContainer.className = "gallery-tabs";

        const albums = data.albums;
        let activeAlbumId = albums[0].id;

        // Large image viewer state
        const viewer = document.createElement("div");
        viewer.className = "gallery-viewer-overlay";
        viewer.hidden = true;

        const viewerModal = document.createElement("div");
        viewerModal.className = "gallery-viewer-modal";

        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "gallery-viewer-close";
        closeButton.setAttribute("aria-label", "Close image viewer");
        closeButton.textContent = "Close";

        const viewerImageWrap = document.createElement("div");
        viewerImageWrap.className = "gallery-viewer-image-wrap";

        const viewerImage = document.createElement("img");
        viewerImage.className = "gallery-viewer-image";
        viewerImage.alt = "Expanded gallery image";

        viewerImageWrap.appendChild(viewerImage);

        const viewerControls = document.createElement("div");
        viewerControls.className = "gallery-viewer-controls";

        const prevButton = document.createElement("button");
        prevButton.type = "button";
        prevButton.className = "gallery-viewer-btn";
        prevButton.textContent = "Prev";

        const viewerCaption = document.createElement("p");
        viewerCaption.className = "gallery-viewer-caption";

        const nextButton = document.createElement("button");
        nextButton.type = "button";
        nextButton.className = "gallery-viewer-btn";
        nextButton.textContent = "Next";

        viewerControls.appendChild(prevButton);
        viewerControls.appendChild(viewerCaption);
        viewerControls.appendChild(nextButton);

        viewerModal.appendChild(closeButton);
        viewerModal.appendChild(viewerControls);
        viewerModal.appendChild(viewerImageWrap);
        viewer.appendChild(viewerModal);

        let activeAlbumImages = [];
        let activeImageIndex = 0;

        function renderViewer() {
            if (!activeAlbumImages.length) {
                viewer.hidden = true;
                document.body.classList.remove("modal-open");
                return;
            }

            const activeSrc = activeAlbumImages[activeImageIndex];
            viewerImage.src = activeSrc;
            viewerCaption.textContent = `${activeImageIndex + 1} / ${activeAlbumImages.length}`;
            viewer.hidden = false;
            document.body.classList.add("modal-open");
        }

        function closeViewer() {
            viewer.hidden = true;
            viewerImage.removeAttribute("src");
            viewerCaption.textContent = "";
            activeAlbumImages = [];
            activeImageIndex = 0;
            document.body.classList.remove("modal-open");
        }

        function openViewer(images, imageIndex) {
            activeAlbumImages = images;
            activeImageIndex = imageIndex;
            renderViewer();
        }

        prevButton.addEventListener("click", () => {
            if (!activeAlbumImages.length) {
                return;
            }

            activeImageIndex = (activeImageIndex - 1 + activeAlbumImages.length) % activeAlbumImages.length;
            renderViewer();
        });

        nextButton.addEventListener("click", () => {
            if (!activeAlbumImages.length) {
                return;
            }

            activeImageIndex = (activeImageIndex + 1) % activeAlbumImages.length;
            renderViewer();
        });

        closeButton.addEventListener("click", closeViewer);
        viewer.addEventListener("click", (event) => {
            if (event.target === viewer) {
                closeViewer();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && !viewer.hidden) {
                closeViewer();
            }
        });

        // Create tab buttons
        const buttons = {};
        albums.forEach(album => {
            const button = document.createElement("button");
            button.textContent = album.name;
            button.className = "gallery-tab " + (album.id === activeAlbumId ? "active" : "");
            button.dataset.albumId = album.id;
            buttons[album.id] = button;
            tabContainer.appendChild(button);
        });

        container.appendChild(tabContainer);
        container.appendChild(viewer);

        // Create album container
        const albumsContainer = document.createElement("div");
        albumsContainer.className = "albums-container";

        // Create grid for each album
        const albumDivs = {};
        albums.forEach(album => {
            const albumDiv = document.createElement("div");
            albumDiv.className = "album " + (album.id === activeAlbumId ? "active" : "");
            albumDiv.dataset.albumId = album.id;

            const albumTitle = document.createElement("h2");
            albumTitle.textContent = album.name;
            albumDiv.appendChild(albumTitle);

            if (album.description) {
                const description = document.createElement("p");
                description.className = "album-description";
                description.textContent = album.description;
                albumDiv.appendChild(description);
            }

            const grid = document.createElement("div");
            grid.className = "gallery-grid";

            album.images.forEach((src, index) => {
                const img = document.createElement("img");
                img.src = src;
                img.alt = `${album.name} - Image ${index + 1}`;
                img.loading = "lazy";
                img.addEventListener("click", () => {
                    openViewer(album.images, index);
                });
                grid.appendChild(img);
            });

            albumDiv.appendChild(grid);
            albumsContainer.appendChild(albumDiv);
            albumDivs[album.id] = albumDiv;
        });

        container.appendChild(albumsContainer);

        // Add click listeners to buttons
        albums.forEach(album => {
            buttons[album.id].addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                // Update active tab button
                Object.values(buttons).forEach(btn => {
                    btn.classList.remove("active");
                });
                buttons[album.id].classList.add("active");

                // Update active album
                Object.values(albumDivs).forEach(div => {
                    div.classList.remove("active");
                });
                albumDivs[album.id].classList.add("active");

                closeViewer();
            });
        });

    } catch (error) {
        console.error("Error loading galleries:", error);
        const errorMsg = document.createElement("p");
        errorMsg.textContent = "Error loading gallery. Please try again later.";
        container.appendChild(errorMsg);
    }

    return container;
}

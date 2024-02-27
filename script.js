document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn-1').forEach(function(btn) {
        btn.addEventListener('mouseover', function() {
            const infoId = btn.getAttribute('data-info');
            document.getElementById(infoId).style.display = 'block';
        });

        btn.addEventListener('mouseout', function(event) {
            const infoId = btn.getAttribute('data-info');
            const info = document.getElementById(infoId);
            if (!event.relatedTarget || (event.relatedTarget !== info && !info.contains(event.relatedTarget))) {
                info.style.display = 'none';
            }
        });
    });

    document.querySelectorAll('.info-box').forEach(function(info) {
        info.addEventListener('mouseout', function(event) {
            if (!event.relatedTarget || !event.relatedTarget.classList.contains('btn-1')) {
                info.style.display = 'none';
            }
        });
    });
});

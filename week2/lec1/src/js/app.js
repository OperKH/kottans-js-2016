import '../css/app.css';

(() => {
    const $timelineLabel = $('.timeline-label');
    const $timelineLabels = $('.timeline-labels');
    const $timelineSelector = $('.timeline-selector');
    $('.timeline-selector').on('change', function() {
        const selectedIndex = this.value;
        $timelineLabel.removeClass('active');
        var selectedLabel = $timelineLabel.get(selectedIndex);
        $(selectedLabel).addClass('active');
    })
    $timelineLabels.on('click', '.timeline-label', function(e) {
        const index = $timelineLabel.index(this)
        $timelineSelector.val(index);
        $timelineLabel.removeClass('active');
        $(this).addClass('active');
    })
})();

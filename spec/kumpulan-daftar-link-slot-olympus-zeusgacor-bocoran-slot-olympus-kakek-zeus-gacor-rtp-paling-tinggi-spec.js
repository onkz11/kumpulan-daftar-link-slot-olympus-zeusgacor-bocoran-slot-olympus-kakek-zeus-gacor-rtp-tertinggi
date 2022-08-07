'use babel';

import KumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggi from '../lib/kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-rtp-paling-tinggi';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('KumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggi', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-rtp-paling-tinggi');
  });

  describe('when the kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-rtp-paling-tinggi:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-rtp-paling-tinggi')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-rtp-paling-tinggi:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-rtp-paling-tinggi')).toExist();

        let kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiElement = workspaceElement.querySelector('.kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-rtp-paling-tinggi');
        expect(kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiElement).toExist();

        let kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiPanel = atom.workspace.panelForItem(kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiElement);
        expect(kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-rtp-paling-tinggi:toggle');
        expect(kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-rtp-paling-tinggi')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-rtp-paling-tinggi:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiElement = workspaceElement.querySelector('.kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-rtp-paling-tinggi');
        expect(kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-rtp-paling-tinggi:toggle');
        expect(kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiElement).not.toBeVisible();
      });
    });
  });
});

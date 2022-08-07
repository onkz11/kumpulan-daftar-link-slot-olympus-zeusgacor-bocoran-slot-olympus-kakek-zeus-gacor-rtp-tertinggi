'use babel';

import KumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiView from './kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-rtp-paling-tinggi-view';
import { CompositeDisposable } from 'atom';

export default {

  kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiView = new KumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiView(state.kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'kumpulan-daftar-link-slot-olympus-zeusgacor-bocoran-slot-olympus-kakek-zeus-gacor-rtp-paling-tinggi:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiView.destroy();
  },

  serialize() {
    return {
      kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiViewState: this.kumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggiView.serialize()
    };
  },

  toggle() {
    console.log('KumpulanDaftarLinkSlotOlympusZeusgacorBocoranSlotOlympusKakekZeusGacorRtpPalingTinggi was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
